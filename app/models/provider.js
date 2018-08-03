class Provider {
	constructor(name, apiKey) {
    	this._name = name;
    	this._apiKey = apiKey;
        this._senderMail = 'chanon@test.com';
    }
    getName() {
    	return this._name
    }
    send() {
        throw new Error('Implementation of send method is required');
    }
}
module.exports = Provider;