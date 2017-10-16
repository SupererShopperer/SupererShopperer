const db = require('../db');

const itemController = {};

/**
* getTopItems
*
* Searches items_table for top 6 items sold 
* 
* returns: [  { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold} ]
  

*/
itemController.getTopItems = (req, res, next) => { 
  const queryStr = 'SELECT * FROM items ORDER BY num_sold ASC LIMIT 6';  
  db.conn.query(queryStr, (err, data) => {
    if (err) {
      return res.status(404).end("An Error occured on DB Query");
    }
    if (data.rows.length === 0) {
      return res.status(200).end('Not Found');  
    }
    return res.status(200).end(JSON.stringify(data.rows));
  });       
};

/**
* getItemById
*
* Gets Item Object from items_table for this _id
* 
* Post - Body { _id: ‘<STRING>’ }
*
* returns: { _id, title, price, img, num_sold, summary, 
              description, location, shipping_duration, 
              shipping_cost, stock_available }

*/
itemController.getItemById = (req, res, next) => {
  let queryName = req.body._id;
  let metaQuery = "SELECT * FROM items INNER JOIN item_details ON items._id = item_details.item_id WHERE items._id = "+ queryName;
  db.conn.query(metaQuery, (err, data) => {
    if (err) return res.status(404).send('An error occurred on db query');
    if (!data.rows.length) return res.status(404).send('Not found');
    return res.status(200).send(data.rows);
  });
};


/**
* getAllItemsFromIds
*
* Searches items_table for all items in the database using id's from req.params.itemIdArr 
* 
* returns: [  { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold},
              { _id, title, price, img, num_sold},
              ... <As many rows as exist>          ]
*
*/
itemController.getAllItemsFromIds = (req, res, next) => {
  let queryName = res.locals.myDataArr;
  let metaQuery = "SELECT * FROM items WHERE ";
  queryName.forEach( (element,index) => {
    if (index===0)
     metaQuery += "_id = "+ element;
      else
     metaQuery += " or _id = "+element;
  })
  console.log('metaquery   ',metaQuery);
    db.conn.query(metaQuery, (err, data) => {
      if (err) return res.status(404).send('An error occurred on db query');
      if (!data.rows.length) return res.status(404).send('Not found');
      return res.status(200).send(data.rows);
    });
};

/**
* addNewItem
*
* Inserts into items_table
*
* Post - Body { title: ‘<STRING>’, price: ‘<Number>’, img: ‘<STRING>’, num_sold: ‘<Number>’  }
* 
* adds to req.params.itemObj: { item_id, title, price, img, num_sold }
*
*/
itemController.addNewItem = (req, res, next) => {
  const queryStr = 'INSERT INTO items (title, price, img, num_sold) values ($1, $2, $3, $4) RETURNING _id';  
  const { title, price, img, num_sold } = req.body;
  const valuesArr = [ title, price, img, num_sold ];

  db.conn.query(queryStr, valuesArr, (err, data) => {
    if (err) {
      return res.status(404).end("An Error occured on DB Insert items_table");
    }
    if (data.length === 0) {
      console.log('Error creating new Entry..');
      return;
    }
    if (res.locals.itemObj) {
      console.log('res.locals.itemObj Already Exists!!');
      return; 
    }
    const item_id = data.rows[0]._id; 
    const itemObj = { item_id, title, price, img, num_sold };
    res.locals.itemObj = itemObj;
    next();
  });
};


module.exports = itemController;