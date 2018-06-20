// Required dependencies
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

// Set up express
const PORT = process.env.PORT || 8000;

// Set up handlebars
app.engine("handlebars", exphbs ({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/", function(req, res) {
    res.render("home.handlebars");
});

// MAKE PUBLIC FOLDER STATIC
app.use(express.static("public"));

//Start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});