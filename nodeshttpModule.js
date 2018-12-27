const http = require("http");

function dummyFunction(request, response){
	console.log("requested url: " + request.url);
	response.end("Hello, World!");
}

var server = http.createServer(dummyFunction);

server.listen(3000);
