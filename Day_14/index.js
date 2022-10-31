const http = require('http')

const server = http.createServer((req, res) => {
    res.write("Hello, I'm on Day 14 of the 30 Days Learning Challenge with Nodejs")
    res.end() // If you will remove res.end(), server will not be able to notify client that response writing is done
})

server.listen(5000, () => {
    console.log('Server running on port 5000')
})