var express = require('express');
var router = express.Router();
const Employee = require('../service/employee');

/* GET home page. */
router.get('/', async function(req, res, next) {    
    const filter = req.query.filter;
    console.log(req.query);
    console.log(filter);
    const results = await Employee.findAll(filter);
    res.json(results);
});

module.exports = router;
