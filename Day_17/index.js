const http = require('http')
/* 
	string_decoder is a core module provided by Nodejs that 
	allows us decode encoded strings or buffers 
*/
const { StringDecoder } = require("string_decoder")

let server = http.createServer((req, res) => {
    /* 
		We create a new decoder using the StringDecoder class and specify 
		that we want to decode encoded strings or buffers using UTF-8
	*/
    let decoder = new StringDecoder('utf-8')

    /* 
		This empty string is an accumulator used to hold the results of 
		decoding chunks of data 
	*/
    let body = ""

    req.on('data', (chunk) => {
        /* 
			When we recieve a chunk of data, we decode it and append it to our
			accumulator 
		*/
        body = body + decoder.write(chunk)
    })

    req.on('end', () => {
        /* 
			When there are no more chunks of data, we decode any remaining data
			in our decoder and append it to our accumulator 
		*/
        body = body + decoder.end()

        /* 
			We log the complete body to our console and send an empty response to
			the client
		*/
        console.log(body)
        res.statusCode = 200
        res.end()
    })

})
server.listen(5000, () => {
    console.log('Server running')
})