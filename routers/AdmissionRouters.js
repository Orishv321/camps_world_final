const controller = require("../Controllers/AdminissionController");
module.exports = (routers) => {
  routers
    .route("/adminission")
    .post(controller.postAdminission)
    .get(controller.getAdminission)
    .put(controller.rejectOrAccept);
};
