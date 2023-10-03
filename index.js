// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const routes = require('./routes/home')
const about = require('./routes/about');
const projects = require('./routes/projects');
const services = require('./routes/services');
const contact = require('./routes/contact');

const app = express()
const port = 5000

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/documents', express.static(__dirname + '/public/documents'));

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/basic-layout')
app.set('view engine', 'ejs')

// Routes
app.use('', routes);
app.use('/about', about);
app.use('/projects', projects);
app.use('/services', services);
app.use('/contact', contact);


// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))