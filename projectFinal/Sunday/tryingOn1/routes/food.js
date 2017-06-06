var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
router.get('/dessert', function (req, res) {
    var config = require('config');
    var json = fs.readFileSync(config.dataPath + '/dessert.json', 'utf8').trim();
    var dessert = JSON.parse(json);
    res.end(JSON.stringify(dessert));
});


router.get('/drinks', function (req, res) {
    var config = require('config');
    var json = fs.readFileSync(config.dataPath + '/drinks.json', 'utf8').trim();
    var drinks = JSON.parse(json);
    res.end(JSON.stringify(drinks));
});

router.get('/mainCourse', function (req, res) {
    var config = require('config');
    var json = fs.readFileSync(config.dataPath + '/mainCourse.json', 'utf8').trim();
    var mainCourse = JSON.parse(json);
    res.end(JSON.stringify(mainCourse));
});


module.exports = router;