var express = require('express');
var router = express.Router();
const Suggestion = require('../service/suggestion');

/* GET home page. */
router.get('/', async function(req, res, next) {    
    const suggestions = await Suggestion.generate();
    res.json(suggestions);
});

module.exports = router;
