let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
require('dotenv').config();

let port = process.env.PORT;
let app = express();

let index = require("./routes/index");
let users = require("./routes/users");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/", index);
app.use("/user", users);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});