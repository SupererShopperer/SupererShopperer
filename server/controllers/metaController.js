const db = require('../db');
const metaController = {};
/**
* searchItems
*
* Searches meta_table for item_id's with meta.alias like searchWord
*
* Post - req.body { searchWord: ‘<STRING>’ }
*
* returns: [ item_id, item_id, ... <as many id's as exist in table >  ]
*
*/
metaController.searchItems = (req, res, next) => {
let queryName = req.body.searchWord.toLowerCase();
let metaQuery = "SELECT DISTINCT item_id FROM meta WHERE LOWER(alias) LIKE '%"+queryName+"%'";
  console.log("Query Name: ", queryName)
  db.conn.query(metaQuery, (err, data) => {
    if (err) return res.status(404).send('An error occurred on db query');
    if (!data.rows.length) return res.status(404).send('Not found');
    let dataArr=[];
    data.rows.forEach( element => {
      dataArr.push(element.item_id);
    })
    if (req.params.myDataArr) {
      console.log('error - duplicate variable name  - myDataArr - used');
      return;
    }
      else {
        res.locals.myDataArr = dataArr;
        console.log('req.locals=    ',req.locals);
        next();
      }
  });
};


metaController.addNewItemsMetaWords = (req,res,next) => {
  let metaArr= req.body.metaString.split(',');  //array of metawords [oil, motor oil, car oil]
  let theId = res.locals.itemObj.item_id;   //item_id
  let queryStr = 'INSERT INTO meta (item_id, alias) values ';
  for (let i = 0; i < metaArr.length; i++) {
    queryStr += `( ${theId}, '${metaArr[i].trim()}' ), `;
  }
  queryStr = queryStr.trim();
  const queryStrArr = queryStr.split('');
  queryStrArr.pop();
  queryStr = queryStrArr.join('');

  db.conn.query(queryStr, (err, data) => {
    if (err) {
      return res.status(404).end("An Error occured on DB Insert meta_table");
    }
    if (data.length === 0) {
      console.log('Error creating new Entry..');
      return;
    }
    res.locals.itemObj.metaString = req.body.metaString;
    res.status(200).send(JSON.stringify(res.locals.itemObj));
  });
}
module.exports = metaController;
