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
        res.redirect(url);
    });
}

router.get('/', function (req, res) {
    res.send('Use: https://damp-sierra-41060.herokuapp.com/new/http://link');
});

router.param('url', function (req, res, next, url) {
    console.log('this is whats passed to me', url);
    // validates that there is a protocol
    if (/^https?:\/\//.test(url)) {
        req.url = url;
    } else {
        req.url = "";
    }
    next();
});

router.get('/new', function (req, res) {
    res.send('Url required');
});

router.get('/new/:url(*)', function (req, res) {
    var url = req.url;
    if (url.length == 0) {
        res.send('Url must contain either http:// or https://');
    }
    var shortUrl = shortenUrl(url);
    shortenedUrls.push(shortUrl);
    createRoute(url, shortUrl);
    res.json({
        url: url,
        shortUrl: 'https://damp-sierra-41060.herokuapp.com/' + shortUrl
    });
});

app.use('/', router);

app.listen(PORT);
