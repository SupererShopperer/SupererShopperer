
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const itemController = require('./controllers/itemController');
const itemDetailsController = require('./controllers/itemDetailsController');
const metaController = require('./controllers/metaController');
const userController = require('./controllers/userController');
const client_id = "174cd191ab6c866f3007";
const clientSecret ="7bc6aee9827703c5faf8e35763d89cf97c091e60";
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/api', userController.createUser);

app.get('/api', userController.getUser);

app.get('/', itemController.getTopItems);

app.post('/findItems', metaController.searchItems,
                       itemController.getAllItemsFromIds);

app.post('/getItemById', itemController.getItemById);

app.post('/addNewItem', itemController.addNewItem,
                        itemDetailsController.addNewItemDetail,
                        metaController.addNewItemsMetaWords);

app.get('/githubauth', (req, res) => {
  const accessCode = req.query.code;
  console.log('outside, getting token');
  request(`https://github.com/login/oauth/access_token?client_id=${client_id}&amp;client_secret=${clientSecret}&amp;code=${accessCode}`, function(err, response, body) {
  console.log('trying to get token inside')  
  const accessToken = body.split('=')[1].split('&')[0];
  console.log(body);
  console.log(accessToken);
  res.cookie('accessToken', accessToken);
  });
                          
  request.get({url: 'https://api.github.com/user/emails?access_token=' + accessToken, headers: {'User-Agent': 'USER LURKER APP'}}, function(err, response, body) {
  console.log('PASSED');
  const userEmail = JSON.parse(body)[0].email;
  req.body.username = userEmail;
  req.body.password = "oauthmaster";
  userController.verifyUser(req, res, userController.createUser); //already makes cookie through many redirections
  });

  
});


app.listen(8080); //listens on port 8080 -> http://localhost:8080/
