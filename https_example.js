 
// 1. Require the https module
var https = require('https');

// console.log('I did it!');

// Make a simple request to example.org
// var options = {
//     host: 'www.example.org',
//     path: '/'
// };

// request to the stream-large-file.herokuapp.com
var options = {
    host: 'stream-large-file.herokuapp.com',
    path: '/give-me-stuff-now'
};


//called by https when the request is made.

var callback = function(response) {
    console.log("In response handler callback!");

    response.on('data', function(chunk) {
        console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
        console.log(chunk.toString());
    });
}

console.log("I'm about to make the request...");

https.request(options, callback).end();

console.log("I've made the request!");


