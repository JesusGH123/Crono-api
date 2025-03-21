let express = require("express");
let router = express.Router();

let usersController = require("../controllers/users.controller");

router.get("/users", usersController.get_users);
router.get("/user/:id", usersController.get_user);
router.post("/user", usersController.create_user);
router.delete("/user/:id", usersController.delete_user);
router.put("/user/:id", usersController.update_user);

module.exports = router;