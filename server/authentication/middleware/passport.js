const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../user");


module.exports = function (passport){
	passport.use(
		new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
			
			User.findOne({email})
			.then(user => {
				if(!user){
					done(null, false, {message: "Incorrect email or password."})
				}
				else{
					bcrypt.compare(password, user.password, (err, isMatch) => {
						if(err){
							done(err, false, {message: "Internal Server error"})
						} 
						if(isMatch){
							return done(null, user)
						}
						else{
							return done(null, false, {message: "Incorrect email or password."})
						}
					})	
				}
		})
		.catch((err) => {
			done(err, false, {message: "Internal server error" })
		})
	})
	)

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	  });
	
	passport.deserializeUser(function(id, done) {
		User.findById(id, (err, user) => {
			done(err, user);
		});
	});
 }