const db = require('../db');

const itemDetailsController = {};

/**
* addNewItemDetail
*
* Inserts into items_details_table
* 
* Post - Body { summary: ‘<STRING>’, description: ‘<STRING>’, location: ‘<STRING>’, shipping_duration: ‘<Number>’, 
                shipping_cost: ‘<Number>’, stock_available: ‘<Number>’  }
* 
* req.params.item_id - will contain item_id from previous middleware
*
* returns: { item_id, title, price, img, num_sold, summary, description, location, shipping_duration, shipping_cost, stock_available, item_id }
*/

itemDetailsController.addNewItemDetail = (req, res, next) => {
  const queryStr = 'INSERT INTO item_details (summary, description, location, shipping_duration, shipping_cost, ' 
                  + 'stock_available, item_id) values ($1, $2, $3, $4, $5, $6, $7) RETURNING _id';  
  const { summary, description, location, shipping_duration, shipping_cost, stock_available } = req.body;
  const itemObj = res.locals.itemObj;
  const item_id = itemObj.item_id;
  const valuesArr = [  summary, description, location, shipping_duration, shipping_cost, stock_available, item_id ];

  db.conn.query(queryStr, valuesArr, (err, data) => {
    if (err) {
      return res.status(404).end("An Error occured on DB Insert items_table");
    }
    if (data.length === 0) {
      console.log('Error creating new Entry..');
      return;
    }
    res.locals.itemObj = Object.assign(itemObj, { summary, description, location, shipping_duration, 
                                                  shipping_cost, stock_available });    
    next();
  });
}


module.exports = itemDetailsController;