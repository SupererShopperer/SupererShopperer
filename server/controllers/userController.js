const db = require('../db');

const userController = {};

userController.createUser = (req, res) => {

console.log(req.body.username);
let query = {
text: 'INSERT INTO users (firstname, lastname, username, password) VALUES($1, $2, $3, $4) RETURNING id',
values: [req.body.firstname, req.body.lastname, req.body.username, req.body.password],
rowMode: 'array'
};

console.log(query.values[2], query.values[3]);
// be able to set a cookie 
}

userController.getUser = (req, res) => {
db.conn.one('users')
.then(getUser => {
if(!user){res.status(404).send('No user found!')}; 
res.status(200).send({'msg':'Got user!', 'id': getUser.id})})
.catch(err => res.status(404).send(err));
}



module.exports = userController;