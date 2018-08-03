'use strict';
const sqlite3 = require("sqlite3").verbose();
class HistoryController {
  static getAllHistory(req, res) {
      let db = new sqlite3.Database("./database/EmailService.db");
      let sql = `SELECT * FROM history`;
      db.all(sql, [], (err, rows) => {
        if (err) {
          console.log(err);
          throw err;
        }
        return res.json({
          status: 'success',
          history: rows
        });
    });
  }

  static getSpecifiedHistory(req, res) {
    let db = new sqlite3.Database("./database/EmailService.db");
    let sql = `SELECT * FROM history WHERE id='${req.params.history_id}'`;
    db.all(sql, [], (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }
      return res.json({
        status: 'success',
        history: result
      });
    });
  }
}

module.exports = HistoryController;
