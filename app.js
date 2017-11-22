var express = require('express');
var app = express();


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server = app.listen(port || 8080, () => {
    console.log('Express server listening on port %d in %s', server.address().port, app.settings.env);
});

app.get('/', function (req, res) {
   res.send('Hello World - Node API');
})
