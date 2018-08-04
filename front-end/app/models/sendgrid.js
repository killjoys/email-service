const provider = require('./provider.js');
class SendGrid extends provider {
	constructor(name, apiKey) {
		super(name, apiKey);
		this._sgMail = require('@sendgrid/mail');
		this._sgMail.setApiKey(apiKey);
    }

    send(recipient, subject, content) {
	  	let msg = {
	      to: recipient,
	      from: this._senderMail,
	      subject: subject,
	      text: content
	  };
	  return this._sgMail.send(msg);
	}
}
module.exports = SendGrid;