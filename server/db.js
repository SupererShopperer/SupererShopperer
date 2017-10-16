const pg = require('pg');
const uri = 'postgres://wvpszqdh:MUR1rI1ADIIFkrs1ZloNrAND--PjRyTw@elmer.db.elephantsql.com:5432/wvpszqdh';
const db = {};

pg.connect(uri, (err, client, done) => {
  if (err)  {
    console.log('Error Connecting to Database..');
    throw new Error(err);
  }
  db.conn = client;
  console.log('Connected to Database..')
});

module.exports = db;
