var http = require("http");

function getJediName(url) {
    var urlData = "";

    url = url.replace(/\/$/, ""); // remove any trailing slash
    urlData = url.split('/');

    if (urlData[1].toLowerCase() === "jedi" && urlData.length === 4) {
        return urlData[3].substring(0,3) +  urlData[2].substring(0,2);
    }
}

var server = http.createServer(function(request, response) {
    if (request.url == '/') {
        response.write("Hello World");
    } else {
        var jediName = getJediName(request.url);
        if (jediName) {
            response.write("Greetings jedi " + jediName);
        } else {
            response.write(request.url + " is an invalid jedi url");
        }
    }
    response.end();
});

server.listen(8080);