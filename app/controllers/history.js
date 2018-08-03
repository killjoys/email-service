'use strict';
class HistoryController {
  static getAllHistory(req, res) {
      let sql = `SELECT * FROM history`;
      connection.query(sql, function(err, result) {
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

  static getSpecifiedHistory(req, res) {
    let sql = `SELECT * FROM history WHERE id='${req.params.history_id}'`;
    connection.query(sql, function(err, result) {
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
