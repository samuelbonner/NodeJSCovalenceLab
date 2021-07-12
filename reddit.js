const rp = require('request-promise');
const fs = require('fs');

var options = {
    uri: 'https://reddit.com/r/popular.json',
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
    .then(function ($) {
        // Process html like you would with jQuery...
    })
    .catch(function (err) {
        // Crawling failed or Cheerio choked...
    });