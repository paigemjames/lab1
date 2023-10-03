/*-----------services.js--------*/
/*-----------Paige James--------*/
/*-----------301347443--------*/
/*-----------Due Oct 2--------*/

var express = require('express');
var router = express.Router();

// Define the route for the services page ("/services")
router.get('/', (req, res) => {
    res.render('services', { title: 'Services Page' });
});

module.exports = router;