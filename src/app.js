const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const experiencesRouter = require('./routes/experiences');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', experiencesRouter);

module.exports = app;