const contact = require("./ContactRoutres");
const admission = require("./AdmissionRouters");
const users = require("./UsersRouters");
module.exports = (router) => {
  contact(router);
  admission(router);
  users(router);
  return router;
};
