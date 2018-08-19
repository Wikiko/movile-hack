const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const experiencesRouter = require('./routes/experiences');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', experiencesRouter);

module.exports = app;