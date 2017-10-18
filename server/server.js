
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const itemController = require('./controllers/itemController');
const itemDetailsController = require('./controllers/itemDetailsController');
const metaController = require('./controllers/metaController');
const cors = require('cors');
const client_id = '174cd191ab6c866f3007';
const client_secret = '7bc6aee9827703c5faf8e35763d89cf97c091e60';
const request = require('request');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.get('/', itemController.getTopItems);

// app.get('/', (res, req) => console.log('sdgdrsgdfsgdsfgdfgdfgdfg')
// );

app.post('/findItems', metaController.searchItems,
    itemController.getAllItemsFromIds);

app.post('/getItemById', itemController.getItemById);

app.post('/addNewItem', itemController.addNewItem,
    itemDetailsController.addNewItemDetail,
    metaController.addNewItemsMetaWords);

app.get('/githubauth', (req, res) => {
    const accessCode = req.query.code;
    // console.log('entering auth');
    // res.cookie('outCookie', 'cooookie');
    // res.end();

    // request('https://github.com/login/oauth/authorize?scope=user:email&amp;client_id=174cd191ab6c866f3007')
    // res.header('Access-Control-Allow-Origin', req.headers.origin);
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // console.log(res);
    res.cookie('cook', 'cook', {domain:'http://localhost:3000', httpOnly: false});
    
    request(`https://github.com/login/oauth/access_token?client_id=${client_id}&amp;client_secret=${client_secret}&amp;code=${accessCode}`, function (err, response, body) {
        const accessToken = body.split('=')[1].split('&')[0];
        console.log('access tocken accessed: ', accessToken);
        

        request.get({ url: 'https://api.github.com/user/emails?access_token=' + accessToken, headers: { 'User-Agent': 'Superer Shopperer' } }, function (err, response, body) {
            // console.log('body', body);
            const userEmail = JSON.parse(body)[0].email;
            console.log('email: ', userEmail)
            res.cookie('userEmail', userEmail);
            // res.send('hi');
            res.redirect('http://www.localhost:3000/');
            
        });

    })
})

app.listen(8080); //listens on port 8080 -> http://localhost:8080/
