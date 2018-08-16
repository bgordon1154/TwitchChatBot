var tmi = require('tmi.js');

var options = {
	options: {
		debug: true
	},
	connection: {
		reconnect: true
	},
	identity: {
		username: "<name of bot goes here>",
		password: "<auth key goes here>"
	},
	channels: ["<channel for bot goes here>"]
};

//Set up client var
var client = new tmi.client(options);
exports.client = client;