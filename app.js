const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
//view engine setup
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')))

app.all("/home", (request, response) => {
    response.render("home")
})

app.all("/about", (request, response) => {
    response.render("about")
})
app.all("/cast", (request, response) => {
    response.render("cast")
})

app.all("/gallery", (request, response) => {
    response.render("gallery")
})

app.listen(3000, ()=>{
    console.log("Yey APP running")
})