const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const logger = require('morgan');

function expressConfig(app) {
    app.engine('hbs', handlebars({ extname: 'hbs' }));
    app.set('view engine', 'hbs');
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('content'));
    app.use(logger('dev'));
}

module.exports = expressConfig;