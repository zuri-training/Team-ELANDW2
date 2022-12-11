const ensureAuth = function(req, res, next) {
	if (req.isAuthenticated()) {
	return next();
	}
	req.flash('error_msg', 'Please log in to view that resource');
	res.redirect('/users/login');
}
const forwardAuth = function(req, res, next) {
	if (!req.isAuthenticated()) {
	return next();
	}
	res.redirect('/dashboard');      
}

module.exports = {
	ensureAuth,
	forwardAuth
}