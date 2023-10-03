/*-----------projects.js--------*/
/*-----------Paige James--------*/
/*-----------301347443--------*/
/*-----------Due Oct 2--------*/

var express = require('express');
var router = express.Router();

// Define the route for the projects page ("/projects")
router.get('/', (req, res) => {
    res.render('projects', { title: 'Projects Page' });
});

module.exports = router;