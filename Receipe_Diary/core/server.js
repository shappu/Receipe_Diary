// Require the HTTP library
var http = require("http");
// Require the URL library
var url = require('url');

var port = process.env.port || 1337;

var server = http.createServer(function (request, response) {

    switch (request.method) {
        case "GET":
            if (request.url === "/") {
                response.end();
            }
        case "GET":
            if (request.url === "/recipes") {
                recipes.getAllRecipes(request, respose);
            }
            break;
        case "POST":
            if (request.url === "/new") {
                recipes.insert(request, response);
            }
            break;
        case "POST":
            if (request.url === "/remove") {
                recipes.remove(request, response);
            }
            break;
        case "POST":
            if (request.url === "/update") {
                recipes.update(request, response);
            }
            break;
        default:
            break;
    }
}).listen.


