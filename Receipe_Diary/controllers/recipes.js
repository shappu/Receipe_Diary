
var fs = require("fs");


exports.getAllRecipes = function (request, response) {
    fs.readFile( "../data" + "/" + "recipesdata.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(JSON.stringify(data));
    });

    response.end();
};

exports.insert = function (request, response, reqbody) {

};

exports.update = function (request, response, reqbody) {

};

exports.delete = function (request, response, reqbody) {

};

var content = fs.readFileSync("content.txt");
console.log("Output Content : \n" + content);