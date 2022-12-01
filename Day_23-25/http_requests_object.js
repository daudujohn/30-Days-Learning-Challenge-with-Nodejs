'use strict';
const express = require('express');
const app = express();
const http = require('http');

app.get('/', (req, res)=> {
    console.log(req.headers);
    console.log(req.url)
    console.log(req.ip)
    console.log(req.hostname)
    console.log(req.method) //get (for this particular method)
    console.log(req.protocol) //http or https
    console.log(req.path) // the path part of the url
    console.log(req.query) // querystring
    console.log(req.subdomains) // app.sales.xyz.com ['app', 'sales']
    console.log(req.params)
    res.status(404).end();
})

app.listen(8080, (err) => {
    if (err){
        console.log('Error detected:', err)
    }
    console.log('listening on port 8080')
});