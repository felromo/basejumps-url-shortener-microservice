var express = require('express');
var app = express();

var router = express.Router();

var PORT = process.env.PORT || 8080;

var shortenedUrls = [];

function shortenUrl(url) {
    var tmpUrl;
    do {
        tmpUrl = Math.floor((Math.random()*100) + 1);
    } while (shortenedUrls.includes(tmpUrl))
    return tmpUrl;
}

function createRoute(url, shortUrl) {
    router.get('/' + shortUrl, function (req, res) {
        res.redirect('http://' + url);
    });
}

router.get('/', function (req, res) {
    res.send('Url required');
});

router.get('/new/:url?', function (req, res) {
    var url = req.params.url;
    var shortUrl = shortenUrl(url);
    shortenedUrls.push(shortUrl);
    createRoute(url, shortUrl);
    res.json({
        url: url,
        shortUrl: shortUrl
    });
});

app.use('/', router);

app.listen(PORT);
