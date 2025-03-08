let express = require("express");
let router = express.Router();

router.get("/", (_, res) => {
    res.send("Server started");
});

module.exports = router;