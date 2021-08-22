const express = require('express');
const path = require('path');
const app = express();
const publicDir = path.join(__dirname,'./public');
app.use(express.static(publicDir));
app.set('view engine', 'hbs');

/*
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "admin123",
    database: "mydb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("SELECT * FROM mydb", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
  });
*/

app.use('/',require('./routes/pages'));

app.listen(8080,()=>{
    console.log('Server Start on port 8080');

})

