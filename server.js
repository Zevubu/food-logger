const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;
let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
// parse application/json
app.use(bodyParser.json());

app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

let routes = require("./controllers/foodController")


app.use(routes);

app.listen(PORT,function(){
    console.log(`Listening on port: ${PORT}`)
});