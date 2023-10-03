/*-----------about.js--------*/
/*-----------Paige James--------*/
/*-----------301347443--------*/
/*-----------Due Oct 2--------*/

var express = require('express');
var router = express.Router();

// Define the route for the about page ("/about")
router.get('/', (req, res) => {
    res.render('about', { title: 'About Page' });
});

module.exports = router;

