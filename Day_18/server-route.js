const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true)
  let path = parsedURL.pathname;
  // standardize the requested url by removing any '/' at the start or end
  // '/link/to/page' becomes 'link/to/page'
  path = path.replace(/^\/+|\/+$/g, "")
  console.log(path)
  let headers = req.headers
  let qs = parsedURL.query
  let method = req.method.toLowerCase()

  req.on('data', () => {
    console.log('got some data')
    //if no data is passed we don't see this messagee
    //but we still need to listen so the "end" function works.
  })
  req.on('end', () => {
    //request part is finished... we can send a response now
    console.log('send a response');
    //we will use the standardized version of the path
    // checks if the route link exists
    let route = typeof routes[path] !== 'undefined' ? routes[path] : routes['notFound'];
    let data = {
        path: path, 
        queryString: qs, 
        headers: headers, 
        method: method
    }
    //pass data incase we need info about the request
    //pass the response object because router is outside our scope
    route(data, res)
  })
})

server.listen(8080, () => {
    console.log('Listening on port 8080')
})

//define functions for the different Routes
//This object and the functions could be defined in another file that we import
//Each route has a function that takes two parameters
//data: the info about the request
//callback: the function to call to send the response
const routes = {
    jack: (data, res) => {
        // this function is called if the path is 'jack'
    
    let payload = {
        name: 'Jack'
    };
    let payloadStr = JSON.stringify(payload)
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.writeHead(200)
    res.write(payloadStr)
    res.end('\n')
    },
    cartman: function(data, res) {
        // this function called if the path is 'cartman'
        let payload = {
          name: "Cartman"
        };
        let payloadStr = JSON.stringify(payload);
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200);
        res.write(payloadStr);
        res.end("\n");
      },
      "jack/is/cool": function(data, res) {
        //this function called if path is 'jack/is/cool'
        let payload = {
          name: "Jack",
          enemy: "Mr. clarn",
          today: +new Date()
        };
        let payloadStr = JSON.stringify(payload);
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200);
        res.write(payloadStr);
        res.end("\n");
      },
      notFound: function(data, res) {
        //this one gets called if no route matches
        let payload = {
          message: "File Not Found",
          code: 404
        };
        let payloadStr = JSON.stringify(payload);
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(404);
    
        res.write(payloadStr);
        res.end("\n");
    }
}