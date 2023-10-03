/*-----------home.js--------*/
/*-----------Paige James--------*/
/*-----------301347443--------*/
/*-----------Due Oct 2--------*/

var express = require('express');
var router = express.Router();

/*get the page*/

router.get('', (req, res) => {
    res.render('home', { title: 'Home Page'})
})

module.exports = router;