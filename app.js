let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
require('dotenv').config();

let port = process.env.PORT;
let app = express();

let index = require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/", index);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});