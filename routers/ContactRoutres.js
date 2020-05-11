const controller = require("../Controllers/ContactController");
module.exports = (routers) => {
  routers
    .route("/feedback")
    .post(controller.postContacts)
    .get(controller.getContacts);
};
