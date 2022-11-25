# Day 20 | Web Security: HTTP with TLS/SSL, Certificates and Certificate Authorities

So far in our learning series, we’ve used just HTTP to communicate between client and server. However, in practice using just HTTP has the following pitfalls:

- Communication between the client and server can be sniffed by someone listening on the network. **SOLUTION**: We need to encrypt the information, so it won't make sense to them (HTTP with TLS/SSL)
- Another server on the network can intercept communication between clients and our server and pretend to be our server. **SOLUTION**: We need a trust-worthy body to vet all communications from servers to clients (Certificate Authorities)

## HTTP with TLS/SSL, Certificates and Certificate Authorities

[https://www.youtube.com/watch?v=IGtb4khi3dU](https://www.youtube.com/watch?v=IGtb4khi3dU)

[https://www.youtube.com/watch?v=IGtb4khi3dU](https://www.youtube.com/watch?v=IGtb4khi3dU)

[https://www.youtube.com/watch?v=r1nJT63BFQ0](https://www.youtube.com/watch?v=r1nJT63BFQ0)

[https://www.youtube.com/watch?v=r1nJT63BFQ0](https://www.youtube.com/watch?v=r1nJT63BFQ0)

## Creating a HTTPS Server in Nodejs

We will be using the **https core module** in Nodejs and a self-signed certificate generated through `openssl` to create a HTTPS server.

**Generating the Self-Signed Certificate**

You will need to generate two files: **key.pem** and **cert.pem**, which are the private key and certificate files respectively. You can download `openssl` from [here](https://github.com/openssl/openssl#download) and run the following commands in your shell to generate them. 

```bash
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

Or you can use the private key and certificate files I generated myself. 

[key.pem](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d0299b7-0930-4387-9844-b775e175d4b9/key.pem)

[cert.pem](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8b5aeb49-6a31-4a7c-a996-d35d702f9b84/cert.pem)

**Creating the HTTPS Server**

```jsx
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('path/to/private_key/file.pem'),
  cert: fs.readFileSync('path/to/certificate/file.pem')
};

let server = https.createServer(options, (req, res) => {
  res.end();
})

server.listen(5000);
```

You can now test the server from a web browser using the URL: https://localhost:5000.

**Note**: self-signed certificates address the first pitfall of using just HTTP mentioned above, but not the second pitfall. Do you know why?

### Source:

[GDSC, Israel Galadima](https://israelgaladima.notion.site/Day-20-Web-Security-HTTP-with-TLS-SSL-Certificates-and-Certificate-Authorities-e4cdf76b006a4885ab45a62009eb72bb)