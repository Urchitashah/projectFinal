
var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/', function (req, res) {
    var config = require('config');
    var json = fs.readFileSync(config.dataPath + '/users.json', 'utf8').trim();
    var users = JSON.parse(json);

    //ADD SOME CODES here to only show the name and email fields to the public. 

    res.end(JSON.stringify(users));
});

router.post("/add", function (req, res) {
    var config = require('config');
    var users = loadUsers();
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    
    users.push(user);
    fs.writeFileSync(config.dataPath + '/users.json', JSON.stringify(users), "utf8");
    var response = {
        user: user,
        error: ""
    };
    res.end(JSON.stringify(response));
});

function loadUsers() {
    var config = require('config');
    var json = fs.readFileSync(config.dataPath + '/users.json', 'utf8').trim();
    var users = JSON.parse(json);
    return users;
}




module.exports = router;