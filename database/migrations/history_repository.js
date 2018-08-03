"use strict";

const Promise = require("bluebird");
const sqlite3 = require("sqlite3");
const path = require('path');
module.exports = {
  up: function() {
    return new Promise(function(resolve, reject) {
      let db = new sqlite3.Database('./database/EmailService.db');
      db.serialize(function() {
        db.run(`CREATE TABLE history (
          id INTEGER PRIMARY KEY,
          datetime TEXT,
          recipient TEXT,
          subject TEXT,
          content TEXT,
          result TEXT
        )`);
      });
      db.close();
    });
  },
  
  down: function() {
    return new Promise(function(resolve, reject) {
      let db = new sqlite3.Database("./database/EmailService.db");
      db.serialize(function() {
        db.run(`DROP TABLE history`);
      });
      db.close();
    });
  },

  delete: function(){
    return new Promise(function(resolve, reject) {
      let db = new sqlite3.Database("./database/EmailService.db");
      db.serialize(function() {
        db.run(`DELETE * FROM history`);
      });
      db.close();
    });
  }
};
