const router = require("express").Router();
const {forwardAuth, ensureAuth} = require("../authentication/middleware/auth");
const {homePage, dashboard}= require("../controllers/priceCompareControllers");

router.get("/", forwardAuth, homePage);
router.get("/dashboard", ensureAuth, dashboard);
module.exports = router;
