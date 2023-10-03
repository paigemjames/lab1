/*-----------contact.js--------*/
/*-----------Paige James--------*/
/*-----------301347443--------*/
/*-----------Due Oct 2--------*/

var express = require('express');
var router = express.Router();

// Define the route for the contact page ("/contact")
router.get('/', (req, res) => {
    res.render('contact', { title: 'Contact Page' });
});

module.exports = router;