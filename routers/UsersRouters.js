const controller = require("../Controllers/UsersController");
module.exports = (routers) => {
  routers.route("/users").post(controller.addAdmines);
  routers.route("/login").post(controller.findUsers);
};
