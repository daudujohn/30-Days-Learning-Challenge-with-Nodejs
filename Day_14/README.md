# Day 14 | Core Module: http

---

On the first day of the Backend Web Development section of our learning series, we were introduced to the **client-server architecture** **of the web**.

As **Backend Web Developers**, we are concerned with the **server-side** of the web. What that means is that we create services that **handle and respond to HTTP requests** from clients.

Today, we will be learning about the **http core module** in **Nodejs** that allows us implement HTTP servers.

**Note**: servers are not limited to handling and responding to client HTTP requests. They can also act as clients i.e., make HTTP requests to other servers

---

# Learning

[Core Module: http](https://www.notion.so/Core-Module-http-94a0119c80b04a9c93e6d6e0dd0bbf29)

# Core Module: http

---

Takeaways:

- Become familiar with creating a HTTP server in Nodejs i.e., using `http.createServer()`, `server.listen()`, `response.end()`
- Recognize the **request** and **response objects** as **readable** and **writable streams** respectively
- Recognize the **server object** as an **event emitter** and its **callback function** as an **event listener** that is called when the **server object** emits a **request event**

---

[https://www.youtube.com/watch?v=UMKS6su8HQc](https://www.youtube.com/watch?v=UMKS6su8HQc)

[https://www.youtube.com/watch?v=UMKS6su8HQc](https://www.youtube.com/watch?v=UMKS6su8HQc)

**Note**: it is important to call `response.end()` when all data has been written to the **response object**.

**Tip**: You should create a **folder structure** on your PC to organize all coding tasks for each day during the **30-Days Learning Challenge** with **Nodejs**

# Tasks

**Aim**

We will be implementing a simple HTTP server and responding to client requests with and without `response.end()`

- Start **Visual Studio Code** using today’s task folder as the **current working directory**
- Run `npm init` or `npm init -y` to create a **package.json** file in today’s task folder
- Create a file named **index.js** in today’s task folder
- Inside **index.js,** create a HTTP server that listens for requests on **port 5000**

**Case 1**: with `response.end()`

- Inside the server’s request listener, add the following lines:
- `response.write("Hello, I'm on Day 14 of the 30 Days Learning Challenge with Nodejs")`
- `response.end()`

![Screenshot (107).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4f54eca-a121-4215-abbc-358d4a61c36c/Screenshot_(107).png)

- Run `node index.js` and test your server from a browser using the URL: **http://localhost:5000**

**Case 2**: without `response.end()`

- Inside the server’s request listener, add the following lines:
- `response.write("Hello, I'm on Day 14 of the 30 Days Learning Challenge with Nodejs")`

![Screenshot (108).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/78b03ce1-6320-4d57-9c31-01b7763c0dbc/Screenshot_(108).png)

- Run `node index.js` and test your server from a browser using the URL: **http://localhost:5000**

What do you notice in the browser when testing each case?

### Source:

[GDSC, Israel Galadima](https://israelgaladima.notion.site/Day-14-Core-Module-http-7de83989e6084266ad4930e3a20df2e7)