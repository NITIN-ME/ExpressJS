var express = require("express");

var app = express();

app.get("/", function(request, response){
	response.send("Hello World!\n");
});

app.listen(3000, function(){
	console.log("Express app started at port 3000.\n");
});
