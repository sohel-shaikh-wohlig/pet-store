'use strict';
const express= require('express');
const dotenv = require('dotenv');
dotenv.config();
const app=express();
const router=require("./routes/router");
const bodyParser = require('body-parser');
const port=process.argv.port || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    let text = `<div style='position:fixed;top: 50%;left: 50%;width:30em;height:18em;margin-top: -9em;margin-left: -15em;'>`
    text += `<center><h1 style='color:ff006e;'>Welcome to the Pet Store World!</h1></center><br/>`
    text += `<center><h4 style='color:fb5607;'>Environment Variables : <br/>APP_VERSION : <span style='color:#3a86ff;'><b>${process.env.APP_VERSION}</b></span></h4></center>`
    text += '</div>'
    res.send(text);
});
app.set('json spaces', 2);

//Middleware to handle all routes
app.use("/",router);

app.listen(port, (err)=>{
    if(err){
        throw err;
    }
    console.log(`Server listen on the port ${port}.`);
});

//For Catching uncaught exception 

process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
    console.error(err.stack)
    process.exit(1)
})

module.exports = app;