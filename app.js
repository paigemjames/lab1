// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 5000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/css', express.static(__dirname + 'public/js'))
app.use('/css', express.static(__dirname + 'public/images'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/basic-layout')
app.set('view engine', 'ejs')

// Routes
app.get('', (req, res) => {
    res.render('index', { title: 'Home Page'})
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page'})
})
app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects Page'})
})
app.get('/services', (req, res) => {
    res.render('services', { title: 'Services Page'})
})
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Page'})
})


// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))