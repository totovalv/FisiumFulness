const { Router } = require("express");
const register = require("../controllers/registerController");
const registerRouter = Router();

registerRouter.post("/", register.register);
registerRouter.get("/confirm/:token", register.confirm);
registerRouter.post("/login", register.loginLocal);
registerRouter.post("/recover-password", register.recoverPassword);

module.exports = registerRouter;
