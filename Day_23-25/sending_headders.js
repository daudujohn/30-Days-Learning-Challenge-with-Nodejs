'use strict';
const express = require('express')
const app = express()
const port = process.env.port || 3000;
app.set('view engine', 'pug');
