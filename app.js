const express = require ("express");
const app = express();

app.get("/", (req, res)=>{
    res.status(200).send("olá mundo devops!");
});

module.exports = app;