const https = require('https');
const fs = require('fs');
const path = require('path')
const options = {
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
};

let server = https.createServer(options, (req, res) => {
    res.end();
})

server.listen(5000);