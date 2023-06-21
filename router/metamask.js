const Metamask = require("../controller/metamask");

module.exports = (router) => {
  router.get("/metamask", Metamask.getSignature);
}

