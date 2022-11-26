# Day 19 | Servers Acting as Clients

On Day 14 of our learning series of our learning series, I mentioned that: 

> ***“Servers are not limited to handling and responding to client HTTP requests. They can also act as clients i.e., make HTTP requests to other servers”***
> 

Today we learn how to make HTTP requests using the `http.request()` and `http.get()` method

### `http.request()`

This method can be used for any generic HTTP request (POST, PUT, GET etc.). It returns a request object which is a writable stream (a request object is a writable stream when you are making a request, but it is a readable stream when you are receiving a request). See the code snippet below:

```jsx
// http.request() returns request1, a writable stream
let request1 = http.request('http://localhost:5000', {
	method: 'POST',
	headers: {
    'Content-Type': 'application/json'
  }
}, (response) => {
  
})
```

You then write to the body of the request by calling `request.write()` on the request object. See the code snippet below:

```jsx
// JSON content
let body = JSON.stringify({'msg': 'Hello World!'})

request1.write(body)
```

You then need to call `request.end()` on the request object for the request to be initiated. See the code snippet below:

```jsx
request1.end()
```

### `http.get()`

This is very similar to the `http.request()` method except that it is specifically for GET requests. Therefore, it does the following for you behind the scenes:

- it automatically sets the request method to GET for you and
- it automatically calls `request.end()` for you (this behavior is intuitive. Since it is a GET request, you do not need to write a body to the request object, hence no need for `request.end()`)

[https://www.youtube.com/watch?v=rh7opViDFMo](https://www.youtube.com/watch?v=rh7opViDFMo)

[https://www.youtube.com/watch?v=rh7opViDFMo](https://www.youtube.com/watch?v=rh7opViDFMo)

**Note**: calling `http.request()` with the default configurations (you do not pass in the second parameter which is a configuration object) is equivalent to calling `http.get()`

### Source:

[GDSC, Israel Galadima](https://israelgaladima.notion.site/Day-19-Servers-Acting-as-Clients-6c935caa42f64bcea9fd6a017a9ecca0)