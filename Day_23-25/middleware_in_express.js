'use strict';
const express = require('express');
const app = express();
const cors = require('cors');

const {sup, how} = require('./middle');

app.use(sup)
app.use(cors())
app.get('/', how, sup, (req, res) => {
    console.log(req.url);
    res.send({data: 'Hi there'}); // express can determine content-type automatically
})

app.listen(3000, (err) => {
    if (err){
        console.log('Error detected:', err)
    }
    console.log('listening on port 3000')
});