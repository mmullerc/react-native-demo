import mysql from 'mysql';

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'cars'
});

db.connect();

export default db;
