'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.url);
    res.send('<h1>Hello</h1>'); // express can determine content-type automatically
})

app.get('/old', (req, res) => {
    res.redirect(301, '/new')
})
app.get('/new', (req, res) => {
    res.send('<h2>NEW PAGE</h2>');
})

app.listen(3000, (err) => {
    if (err){
        console.log('Error detected:', err)
    }
    console.log('listening on port 3000')
});