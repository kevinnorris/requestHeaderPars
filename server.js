var express = require("express");
var path = require("path");
var app = express();

app.get("/", function(req, res){
    var ip = req.headers['x-forwarded-for'],
        lang = req.headers["accept-language"],
        userAgent = req.headers["user-agent"];
        
    res.set("Content-Type", "application/json");
    res.send({
        "ipaddress": ip,
        "language": lang.indexOf(",") ? lang.substring(0,lang.indexOf(",")) : lang,
        "os": userAgent.substring(userAgent.indexOf("(") + 1, userAgent.indexOf(")")),
        "browser": userAgent.substr(0, userAgent.indexOf(" "))
    });
});

app.listen(process.env.PORT || 8080);