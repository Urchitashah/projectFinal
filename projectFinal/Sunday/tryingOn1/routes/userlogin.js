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

router.post("/validate", function (req, res) {
    var config = require('config');

    var hasMatch = false;
    var json = fs.readFileSync(config.dataPath + '/users.json', 'utf8').trim();
    var users = JSON.parse(json);
    var index = 0;
    for (; index < users.length; ++index) {
        
        var user = users[index];
        
        if (user.email == req.body.email && user.password == req.body.password) {
            hasMatch = true;
            break;
        }
    }
    
    if (hasMatch) {
        var user = {
            name:users[index].name,
            email: req.body.email,
            password: req.body.password
        };

        var response = {
            user: user,
            error: ""
        };
    }
    else {
        var response = {
            error: "Invalid Login"
        };
    }
    res.end(JSON.stringify(response));
});

module.exports = router;