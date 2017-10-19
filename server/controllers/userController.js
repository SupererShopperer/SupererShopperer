const db = require('../db');

const userController = {};

userController.verifyUser = (req, res) => {
    const queryOne = {
      text: 'SELECT username FROM users WHERE username=$1',
      values: req.body.username
    };
  
    console.log(req.body.username);

    db.conn.query(queryOne)
    .then((user) => {
      if(!user){
        res.status(400);
        alert('Lets get you registered!');
        res.redirect('/register');
      }; 
      res.status(200)
      res.redirect('./');
    })
    .catch(err => res.status(404).send({'This err is from the verifyUser func': err}));
  }

userController.createUser = (req, res) => {
    console.log('This is the body', req.body);
  // check if user exist
  const queryTwo = {
    text: 'SELECT username FROM users WHERE username=$1',
    values: [req.body.username],
    rowMode: 'array'
    };
  db.conn.query(queryTwo) 
  .then((user) => {
      if(user){
          console.log('This is from the createUser func')
          res.status(200)
          res.redirect('/login');
       }
   })

//   Create query string
    let queryThree= {
        text: 'INSERT INTO users (firstname, lastname, username, password) VALUES($1, $2, $3, $4)',
        values: [req.body.firstname, req.body.lastname, req.body.username, req.body.password],
        rowMode: 'array'
        };
// if user exists already use this query method
    db.conn.query(queryThree)
    .then( () => {
        alert('User created!');
        res.redirect('/')
    })
}







module.exports = userController;






    