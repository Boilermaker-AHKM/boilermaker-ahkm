const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(require('volleyball'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.use('/api', require('./api'));