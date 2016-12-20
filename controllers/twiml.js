require('dotenv').load();
var twilio = require('twilio');
var dexData = require('../dexData');

exports.sendPhoneCall = function(req, res) {
    if (twilio.validateExpressRequest(req, process.env.AUTH_TOKEN)) {
        var twiml = new twilio.TwimlResponse();

        twiml.say('Please check on ' + process.env.CHILD_NAME + '. Currently at ' + dexData.glucose + ' glucose event is ' + dexData.eventType);
        res.type('text/xml');
        res.send(twiml.toString());
    } else {
        res.send('Not valid');
    }
};