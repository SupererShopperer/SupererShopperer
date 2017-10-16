
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const itemController = require('./controllers/itemController');
const itemDetailsController = require('./controllers/itemDetailsController');
const metaController = require('./controllers/metaController');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.get('/', itemController.getTopItems);

app.post('/findItems', metaController.searchItems,
                       itemController.getAllItemsFromIds);

app.post('/getItemById', itemController.getItemById);

app.post('/addNewItem', itemController.addNewItem,
                        itemDetailsController.addNewItemDetail,
                        metaController.addNewItemsMetaWords);

app.listen(8080); //listens on port 8080 -> http://localhost:8080/
