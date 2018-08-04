'use strict';
const moment = require('moment');
const sendGrid = require('../models/sendgrid.js');
const sparkPost = require('../models/sparkpost.js');

const sendgridApiKey = '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';
const sparkPostApiKey = 'ac0bbf6ff6684a40a232843995823256a9078c59';

const sgMail = new sendGrid("Sendgrid", sendgridApiKey);
const sparky  = new sparkPost("SparkPost", sparkPostApiKey);

class MailController {
  static saveHistory(recipient, subject, content, result) {
    let now = moment().format('MMMM Do YYYY, h:mm:ss a');
    let sql = `INSERT INTO history(datetime,recipient,subject,content,result) 
    VALUES('${now}','${recipient}','${subject}','${content}','${result}')`;
    connection.query(sql, function(err, result) {
        if (err) {
          console.log(err);
        }
        console.log("History saved!");
      });
    };

  static async sendMail(req, res) {
    let recipient = req.body.recipient;
    let subject = req.body.subject;
    let content = req.body.content;
    try {
      await sparky.send(recipient, subject, content)
      console.log('Email Sent by '+ sparky.getName() + '!');
      MailController.saveHistory(recipient, subject, content, 'Success');
      return res.json({status: 'success'});
    } catch(error) {
        try {
          console.log('Something went wrong! Try another provider');
          await sgMail.send(recipient, subject, content)
          console.log('Email Sent by '+ sgMail.getName() + '!');
          MailController.saveHistory(recipient, subject, content, 'Success');
          return res.json({status: 'success'});
        } catch(error) {
            console.log('All providers are unavailable');
            MailController.saveHistory(recipient, subject, content, 'Failed');
            return res.json({status: 'failed '});
        }
      }
    }
}
module.exports = MailController;
