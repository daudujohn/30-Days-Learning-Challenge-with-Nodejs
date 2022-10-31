const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin' ,'*')
    res.writeHead(200) // status code HTTP 200 / OK

    let dataobj = {id: 123, name: 'Jack', email: 'jack@work.org'}
    let data = JSON.stringify(dataobj)
    res.end(data)
})

server.listen(8080, () => {
    console.log(`Listening on port 8080`)
})