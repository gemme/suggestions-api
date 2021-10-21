var express = require('express');
var router = express.Router();
const Employee = require('../model/employee');

/* GET home page. */
router.get('/', async function(req, res, next) {    
    const results = await Employee.find();
    res.json(results);
});

module.exports = router;
