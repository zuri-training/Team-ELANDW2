require("../models/database");

/**
 * GET
 * Home / route
 */
exports.homePage = (req, res) => {res.render("index")}

/**
 * GET
 * Dashboard /dashboard route 
 */
exports.dashboard = (req, res) => {
		res.render("dashboard", {user: req.user})
}