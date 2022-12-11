const router = require("express").Router();
const {login, register, registerUser, loginUser, logoutUser, forgotPassword, requestPasswordReset, renderResetPassword, postResetPassword} = require("../authentication/usercontroller");

const {forwardAuth} = require("../authentication/middleware/auth");

router.get("/login", forwardAuth, login);
router.get("/register", forwardAuth, register);
router.post("/register", registerUser);
router.get("/forgotPassword", forgotPassword);
router.post("/requestPasswordReset", requestPasswordReset);
router.get('/resetPassword/:userId/:resetString', renderResetPassword);
router.post('/resetPassword', postResetPassword);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

module.exports = router;