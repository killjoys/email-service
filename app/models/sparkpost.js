const sparkPost = require('sparkpost');
const provider = require('./provider.js');
class SparkPost extends provider {
    constructor(name, apiKey) {
    	super(name, apiKey);
    	this._sparky = new sparkPost(this._apiKey);
    }

    send(recipient, subject, content) {
	  	let msg = {
	  		options: { sandbox: true },
	  		content: {
	  			from: this._senderMail,
	  			subject: subject,
	  			html: content
	  		},
	  		recipients: [ { address: recipient } ]
	  	};
	  	return this._sparky.transmissions.send(msg);
	  }
}
module.exports = SparkPost;