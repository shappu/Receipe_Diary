
var fs = require("fs");




exports.getAllRecipes = function (request, response) {
    fs.readFile("../data" + "/" + "recipesdata.json", 'utf8', function (err, data) {

        console.log(data);
        response.end(JSON.stringify(data));
    });

    response.end();
};

exports.insert = function (request, response, reqbody) {
    fs.readFile("../data" + "/" + "recipesdata.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["rcp4"] = new_recipe["rcp4"];
        response.write(data);
        console.log(data);
        response.end(JSON.stringify(data));
    });

    response.end();
};

exports.update = function (request, response, reqbody) {
    fs.readFile("../data" + "/" + "recipesdata.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["rcp4"] = new_recipe["rcp4"];

        console.log(data);
        response.end(JSON.stringify(data));
    });
    response.end();
};

exports.delete = function (request, response, reqbody) {
    fs.readFile("../data" + "/" + "recipesdata.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["rcp" + 2];

        console.log(data);
        res.end(JSON.stringify(data));
    });
    response.end();
};
