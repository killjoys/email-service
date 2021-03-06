"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const multipart = require("connect-multiparty");
const cors = require("cors");
const serveStatic = require('serve-static');

const mysql = require("mysql");
global.connection = mysql.createConnection({
	 host: 'sql12.freemysqlhosting.net',
	 user: 'sql12250448',
	 password: 'WZ2WMjUqmV',
	 database: 'sql12250448'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... ");    
} else {
    console.log(err);    
}
});

const mailRouter = require('./app/routes/mail');
const historyRouter = require('./app/routes/history');

const PORT = process.env.PORT || 3128;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(serveStatic(__dirname + "/public/dist"));
app.use('/sendmail', mailRouter);
app.use('/history', historyRouter);

app.get("/", function(req, res) {
  res.send("<h1>Welcome to Email Service</h1>");
});

app.listen(PORT, function() {
  console.log(`App running on localhost:${PORT}`);
});

module.exports = app;
