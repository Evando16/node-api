var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 8080, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

app.get('/', function (req, res) {
   res.send('Hello World - Node API');
})
