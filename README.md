# NodeHelloServer
Simple Hello World Node.js Server

This node.js server creates an http server.

1. requires the "http" node module
2. calls http.createServer(function(request, respose) { ... }
3. Listens for the following routes:
    * "/" -> response returns the "Hello World" string
    * "/jedi/FirstName/Lastname route -> response returns the user's jedi name
4. starts the server and listens for http requests on port 8080
