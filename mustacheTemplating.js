var Mustache = require("mustache");

var result = Mustache.render("Hi, {{first}} {{last}}!", {
	first: "Nitin",
	last: "Gandhi"
});

console.log(result);
