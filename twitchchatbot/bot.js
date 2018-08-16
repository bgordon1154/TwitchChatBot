var settings = require('./settings.js');
var client = settings.client;

client.connect();

client.on('connected', function (address, port) {
	client.say("<name of twitch channel goes here>", "Connected to the server!");
});

client.on('chat', function (channel, user, message, self) {
    //Twitter
    if (message === '!twitter') {
    	client.say("bgordon11", "Follow me on Twitter https://twitter.com/B_Gordon11");
    }
    
    //Clear Chat
    if (message === '!clear') {
    	if(user.mod || user.username === '<name of twitch channel goes here>') {
    		client.clear("<name of twitch channel goes here>");
   	 	}
    }

    if (message === '!eagles') {
    	client.say("<name of twitch channel goes here>", "Fly Eagles Fly, on the road to victory! Fight Eagles Fight" +
    		", score a touchdown 1-2-3! Hit 'em low, hit 'em high, and watch our Eagles fly!" +
    		" Fly Eagles Fly, on the road to victory! E-A-G-L-E-S Eagles!!!");
    }

    if (message === '!rand') {
    	var nums = [...Array(5).keys()];
    	randNum = Math.floor(Math.random() * nums.length);
    	client.say("<name of twitch channel goes here>", "Your random number is: " + nums[randNum]);
    }

    if (message === '!goldenKappa') {
    	client.say("<name of twitch channel goes here>", "Golden Kappa check! Kappa Kappa Kappa");
    }

});