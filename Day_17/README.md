# Day 17 | MIME types

---

Today, we will learn how to handle requests with bodies that contain the following common **MIME types**:

- **application/x-www-form-urlencoded** (form data)
- **multipart/form-data** (form data)
- **text/plain** (generic text data)
- **application/octet-stream** (generic binary data)

---

**Tip**: You should create a **folder structure** on your PC to organize all coding tasks for each day during the **30-Days Learning Challenge** with **Nodejs**

# Learning/Task

**Aim**

We want to learn how to handle requests with bodies that contain some common **MIME types**

1. Start **Visual Studio Code** using today’s task folder as the **current working directory**
2. Run `npm init` or `npm init -y` to create a **package.json** file in today’s task folder
3. Create a file named **index.js** in today’s task folder
4. Inside **index.js,** create a HTTP server with the boilerplate code shown below (read the comments to understand what is going on in the code):

```jsx
import http from "http"

/* 
	string_decoder is a core module provided by Nodejs that 
	allows us decode encoded strings or buffers 
*/
import { StringDecoder } from "string_decoder"

let server = http.createServer((req, res) => {

	/* 
		We create a new decoder using the StringDecoder class and specify 
		that we want to decode encoded strings or buffers using UTF-8
	*/
  let decoder = new StringDecoder("utf-8")

	/* 
		This empty string is an accumulator used to hold the results of 
		decoding chunks of data 
	*/
  let body = ""

  req.on("data", (chunk) => {
		/* 
			When we recieve a chunk of data, we decode it and append it to our
			accumulator 
		*/
    body = body + decoder.write(chunk)
  })

  req.on("end", () => {
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
  console.log("Server running")
})
```

1. Run `node index.js` and test your server from Postman for each of the following **MIME types**:

**NOTE**: make sure to set the request method and request URL to **POST** and **http://localhost:5000** respectively when testing from Postman

- **application/x-www-form-urlencoded**

Client Request from Postman: under **Body** select **x-www-form-urlencoded**

![Screenshot (111).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9d389912-ccde-4f9f-b537-4c857727276d/Screenshot_(111).png)

Output on Server

![Screenshot (110).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c15ce50-6083-4ac8-8c3c-883454846869/Screenshot_(110).png)

- **multipart/form-data**

Client Request from Postman: under **Body** select **form-data**

![Screenshot (112).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ffa5b9a1-f4e4-42da-9d0b-9ad6698bcda2/Screenshot_(112).png)

Output on Server

![Screenshot (113).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b2aaefa-d653-4aae-909d-83c723dd8ff5/Screenshot_(113).png)

- **text/plain** (generic text data)

Client Request from Postman: under **Body** select **raw**, then select **Text** in the right-most dropdown menu

![Screenshot (115).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d5af8b78-3576-4e4d-8efd-8fb90ba43a18/Screenshot_(115).png)

Output on Server

![Screenshot (114).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4a995b68-723c-4df9-8ecc-b968517ba2b2/Screenshot_(114).png)

- **application/octet-stream** (generic binary data)

**NOTE**: Use this sample binary file for testing

[sample](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/714de484-5445-4e4d-89e3-e7e32a0887e4/sample.bin)

Client Request from Postman: under **Body** select **binary**

![Screenshot (117).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/364aa69a-2b13-46b3-9f86-bee19a00f398/Screenshot_(117).png)

Output on Server

![Screenshot (116).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8be95bab-ed08-40c5-b97b-126f183ce4ae/Screenshot_(116).png)

## Reflect

- **application/x-www-form-urlencoded** and **multipart/form-data** are both used for form data. Can you see the fields you filled on Postman in their respective outputs on the server?
- Can you explain why the server output for the binary data contains strange characters? How can we prevent this from happening?

## Additional Reading

- Differences between **application/x-www-form-urlencoded** and **multipart/form-data**
- Learn how to use **formidable**, a npm package for parsing form data

### Source:

[GDSC, Israel Galadima](https://israelgaladima.notion.site/Day-17-MIME-types-ec825b0771b54f77a732bcb146867526)