const http = require('http')

// http.request() returns request1, a writable stream
let request1 = http.request('http://localhost:5000', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
    }
}, (response) => {

})

// JSON content
let body = JSON.stringify({'msg': 'Hello World!'})

request1.write(body)
request1.end()