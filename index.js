const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = 3000;

app.use(express.static(__dirname + "\\public"));

app.get("/todo", (req, res) => {
    res.sendFile(__dirname + "\\todo\\todopage.html");
});

server.listen(port);