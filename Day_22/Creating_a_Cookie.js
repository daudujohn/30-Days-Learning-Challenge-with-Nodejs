const http = require('http')

let server = http.createServer((req, res) => {



    // This creates a cookie named 'Key' and sets its
    // value to 'value'

    // Session cookie(default): is destroyed when the 
    //current client session ends
    res.setHeader('Set-Cookie', 'key=value')
    // Permanent cookie: is destroyed after a specified number of 
    // seconds(Max-Age) or after a specific date and time(Expires)
    res.setHeader('Set-cookie', 'key=value;Expires=Wed 30 Nov 2022 07:00:00 GMT')
    res.setHeader("Set-Cookie", "key=value;Max-Age=5000000")

    // HttpOnly: This instructs the browser to restrict 
    // JavaScript access to the cookie i.e., `document.cookie` is disabled in browsers


    res.setHeader("Set-Cookie", "key=value;HttpOnly")

    // Secure: This instructs the browser to only send the cookie through HTTPS 
    // i.e., no HTTP
    res.setHeader("Set-Cookie", "key=value;Secure")
    
    res.end()
})

server.listen(5000, () => {
    console.log('Server running')
})