# Day 18 | Routing

---

- Become familiar with how to implement routing
- Become familiar with absolute and relative routes
- Become familiar with URL query strings

---

### Routing

In the server we tested in Postman yesterday, any request we made to a URL that had the domain of our web server would have gotten a response from our server. What I mean is that [http://localhost:5000](http://localhost:5000) and [http://localhost:5000/some/route](http://localhost:5000/some/route) would have gotten the same response from our server.

Implementing routing with the HTTP core module is a pretty straightforward endeavor. Since the request object always provides the URL for each request (`request.url`), it becomes a trivial matter of just using conditional statements to decide what the server should respond with on whatever route.

Check out the below video for an example

[https://www.youtube.com/watch?v=utI4tU7q-HE](https://www.youtube.com/watch?v=utI4tU7q-HE)

[https://www.youtube.com/watch?v=utI4tU7q-HE](https://www.youtube.com/watch?v=utI4tU7q-HE)

### Source:

[GDSC, Israel Galadima](https://israelgaladima.notion.site/Day-2-JavaScript-Refresher-96ecdd77ddb3462ba90ea6f7c83af90b)