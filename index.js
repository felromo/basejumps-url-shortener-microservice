var express = require('express');
var app = express();

var router = express.Router();

var PORT = process.env.PORT || 8080;

router.get('/', function (req, res) {
    res.json({
        hello: 'world!'
    });
});

app.use('/', router);

app.listen(PORT);
