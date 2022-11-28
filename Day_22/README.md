# Day 22 | Sessions and Cookies

---

**Takeaways**:

- Understand how cookies can be used to make HTTP stateful

---

> ***HTTP is a stateless protocol***
> 

What this means is that by default, all HTTP requests to a server are completely unrelated to one another, from the perspective of the server. 

As an example, let’s say I make ten (10) HTTP requests to a server from my web browser. From the perspective of the server, those ten (10) HTTP requests will be viewed as completely unrelated, even though they are all coming from the same client. Even if the Keep-Alive HTTP header, which allows multiple HTTP requests use the same connection, was present, the server would still interpret all ten (10) HTTP requests as unrelated.

However, in practice, there is often a need to associate requests with one another on the server i.e., make HTTP stateful. 

Sessions make it possible to introduce state to HTTP. There are many ways of implementing sessions in HTTP but vaguely they all follow the same pattern which is:

- Server generates and sends a unique ID to a client on the client’s initial HTTP request. The server persists the unique ID in a data store.
- Client sends the unique ID on subsequent HTTP requests to server. The server checks HTTP requests for a unique ID and associates all HTTP requests with the same unique ID together.

Today, we learn how to implement sessions through cookies. 

### Cookies

A cookie is data that a server sends to a web browser, which the web browser then stores and sends on subsequent HTTP request made to the server that sent the cookie.

It is now obvious how cookies can help us implement sessions: the server generates a unique ID and sends it as a cookie upon the client's initial request. The client then sends the cookie (unique ID) with subsequent requests to the server.

### Creating a Cookie

When responding to a client’s request in Nodejs, we can create a cookie as shown in the code snippet below:

```jsx
import http from "http"

let server = http.createServer((req, res) => {
	...
	...
	
	// This creates a cookie named "key" and sets its value to "value"
	res.setHeader("Set-Cookie", "key=value")
  res.end()
})

server.listen(5000, () => {
  console.log("Server running")
})
```

### Lifetime of a Cookie

- **Session Cookies**: these cookies are destroyed by the browser when the current client session ends. A cookie set without **Expires** or **Max-Age** is a session cookie by default (see next).
- **Permanent Cookies**: these cookies are destroyed by the browser after a specified number of seconds or at a particular date and time
    - **Expires**: This instructs a browser to destroy a cookie at a specified date and time
    
    ```jsx
    res.setHeader("Set-Cookie", "key=value;Expires=Wed, 16 Nov 2022 07:00:00 GMT")
    ```
    
    - **Max-Age**: This instructs a browser to destroy a cookie after a specified number of seconds
    
    ```jsx
    res.setHeader("Set-Cookie", "key=value;Max-Age=5000000")
    ```
    

### Security

- **HttpOnly**: This instructs the browser to restrict JavaScript access to the cookie i.e., `document.cookie` is disabled in browsers

```jsx
res.setHeader("Set-Cookie", "key=value;HttpOnly")
```

- **Secure**: This instructs the browser to only send the cookie through HTTPS i.e., no HTTP

```jsx
res.setHeader("Set-Cookie", "key=value;Secure")
```

**Note**: The meaning of ***“current client session ends”*** varies between browsers. For some it is when the user closes the browser application, for some it is when the user closes the browser tab that caused the cookie to be set and for some it when the user shifts focus from the browser application.

### Source:

[GDSC, Israel Galadima](https://israelgaladima.notion.site/Day-22-Sessions-and-Cookies-d6a82fe36b484a80bc5883a690cbeafb)