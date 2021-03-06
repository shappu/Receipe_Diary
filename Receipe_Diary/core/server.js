﻿// Require the HTTP library
var http = require("http");
// Require the URL library
var url = require('url');

var recipes = require("../controllers/recipes.js");

var port = process.env.port || 1337;

var server = http.createServer(function (request, response) {
    response.write(request.url);
    switch (request.method) {
        case "GET":
            if (request.url === "/") {
                response.end();
            }

            else if (request.url === "/recipes") {
                recipes.getAllRecipes(request, response);
            }
            break;
        case "POST":
            if (request.url === "/new_recipes") {
                recipes.insert(request, response);
            }
            break;
        case "DELETE":
            if (request.url === "/remove_recipes") {
                recipes.remove(request, response);
            }
            break;
        case "POST":
            if (request.url === "/update_recipes") {
                recipes.update(request, response);
            }
            break;
        default:
            console.log("Url does not matches");
            break;
    }
});

server.listen(port);
console.log("Server is listening at port " + port);


