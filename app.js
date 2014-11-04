var express = require('express'),
    app = module.exports = express(),
    bodyParser = require('body-parser'),
    getServiceRequests = require('./js/getServiceRequests'),
    requestHandler = require('./js/requestHandler'),
    compress = require('compression')();

app.use(compress)
  .use(express.static(__dirname+'/public'))
  .use(bodyParser.json());

app.post('/getServiceRequests', function(req, res){
  'use strict';
	getServiceRequests(req, res);
});

app.post('/sendMail', function(req, res){
  'use strict';
  requestHandler(req, res);
});

// Where to put utility?
String.prototype.isEmpty = function() {
  'use strict';
  return (this.length === 0 || !this.trim());
};

Array.prototype.appendStringToElementAtIndex = function(index, str) {
  'use strict';
  if(typeof this[index] === 'undefined' || typeof this[index] !== 'string') {
    return false;
  }
  this[index] += ' ' + str;
};


// CODE TO BE REMOVED FROM WORKING MODULE. THIS IS FOR TESTING ONLY
app.listen(3001);
exports = module.exports = app;
console.log('MEAN.JS application started on port ' + 3001);
