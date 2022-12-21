const User = require("./user");
const PasswordReset = require("./passwordReset");

const bcrypt = require("bcryptjs");
const passport = require("passport");
const validator = require("validator");
const nodemailer = require("nodemailer");
const {v4: uuidv4} = require("uuid");

//nodemailer
const transporter = nodemailer.createTransport({
	host: "yahoo",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD
	},
	tls: {
		rejectUnauthorized: false
	}
})

/**
 * GET
 * Login /login route
 */
exports.login = (req, res) => res.render("login");

/***
 * GET
 * Register /register route 
 */
exports.register = (req, res) => res.render("register");


/***
 * POST
 * /register route
 */
exports.registerUser = (req, res) => {
	const {firstName, lastName, address, email, password, password2} = req.body

	let errors = [];
	if(!firstName || !lastName || !address || !email ||  !password || !password2){
		errors.push({msg: "Please, all fields are required."})
	}

	if(password !== password2){
		errors.push({msg: "Passwords do not match."})
	}

	if(!validator.isEmail(email)){
		errors.push({msg: "Email is invalid."})
	}

	if(password.length < 6){
		errors.push({msg: "Password must be at least 6 characters."})
	}

	if(errors.length > 0){
		res.render("register", {
			errors,
			firstName,
			lastName,
            address,
			email,
			password,
			password2
	})
	}
	else{
		User.findOne({email})
		.then(user => {
			if(user){
				errors.push({msg: "Email already exists."})
				res.render("register", {
					errors,
					firstName,
					lastName,
                    address,
					email,
					password,
					password2
			})
			} 
			else{
				const newUser = new User({		
					firstName,
					lastName,
                    address,
					email,
					password,
				})
		
				bcrypt.hash (newUser.password, 8, (err, hash) => {
					if(err) throw err
					newUser.password = hash
					newUser.save()
					.then(() => {
						//Registration Successful 
						req.flash('success_msg', "Registration successful, you can now log in.")
						res.redirect("/users/login")
					})
					.catch((err) => {
						res.json({
							status: 'FAILED',
							message: "An error occured while saving user account."
						})
                        console.log(err);
					})
				})
			}
		})
		.catch((err) => {
			res.json({
				status: 'FAILED',
				message: "An error occured while checking for existing user."
			})
		})
	}
}


/***
 * GET
 * /forgotPassword route
 */
exports.forgotPassword = (req, res) => {
	res.render("forgotPassword");
}


/***
 * POST
 * /requestPasswordReset route
 */
exports.requestPasswordReset = async (req, res) => {
	const {email} = req.body
	const redirectUrl = "http://localhost:3000/"
    TODO://change redirectURl
	try{
		if(!email){
			throw new Error('Please, input your email...')
		}
		const data = await User.findOne({email})
		if(!data){
			req.flash('success_msg', `A "reset password" mail should be received shortly, if entered email was previously registered.`)	
			res.redirect("/users/forgotPassword")
		}
		else{
			sendResetEmail(data, redirectUrl, res, req)
		}
	}catch(err){
		req.flash('error', err.message)
		res.redirect("/users/forgotPassword")
	}
}

/***
 * Reset email
 */
const sendResetEmail = ({_id, email}, redirectUrl, res, req) => {
	const resetString = uuidv4() + _id
	PasswordReset.deleteMany({ userId: _id})
	.then(result => {
		//reset records deleted successfully
		//next send the email

		const mailOptions = {
			from: process.env.EMAIL,
			to: email,
			subject: "Password Reset",
			html: `<p>Forgotten your password?</p>
				   <p>To reset it, use the link below </p>
				<p>This link <b>expires in 60 minutes</b></p>
				<p>Click <a href=${redirectUrl + "users/resetPassword/" + _id +"/" + resetString}>here</a> to proceed.</p>`
		};

		//hashing the resetString
		bcrypt.hash(resetString, 8, (err, hashedResetString) => {
			if(err){
				res.json({
					status: 'FAILED',
					message: "Error occured while hashing the resetString."
				})		
			}
			else if(hashedResetString){
				//set values in password reset collection
				const newPasswordReset = new PasswordReset({
					userId: _id,
					resetString: hashedResetString,
					createdAt: Date.now(),
					expiresAt: Date.now() + 3600000,
				})

				newPasswordReset.save()
				.then(() => {
					transporter.sendMail(mailOptions)
					.then(() => {
						req.flash('success_msg', `A "reset password" mail should be received shortly, if entered email was previously registered.`)	
						res.redirect("/users/forgotPassword")
					})
					.catch((err) => {
						req.flash('error', `Internal server error, please try again...`)	
						res.redirect("/users/forgotPassword")
                        console.log(err);
					})
				})
				.catch((err) => {
					req.flash('error', `Internal server error, please try again...`)	
					res.redirect("/users/forgotPassword")
                    console.log(err);
				})
			}
		}) 
	})
	.catch((err) => {
		req.flash('error', `Internal server error, please try again...`)	
		res.redirect("/users/forgotPassword")
	})
}

/***
 * Get
 * /renderResetPassword
 */
exports.renderResetPassword = (req, res) => {
	let {userId, resetString} = req.params
	res.render('resetPassword', {userId, resetString})
}


/***
 * POST
 * /requestPassword route
 */
exports.postResetPassword = (req, res) => {
	let {userId, resetString, newPassword} = req.body

	PasswordReset.findOne({userId})
	.then((result) => {
		if(result){
			//password reset request exists
			//check if expiresAt is still valid

			const {expiresAt} = result
			const hashedResetString = result.resetString


			if(expiresAt < Date.now()){
				PasswordReset.deleteOne({userId})
				.then(() => {
					res.json({
						status: 'FAILED',
						message: "Password reset link has expired."
					})
				})
				.catch((err) => {
					res.json({
						status: 'FAILED',
						message: "Clearing password reset record failed."
					})
				})
			}
			else{
				//since password reset link is valid
				//compare hashed reset strings
				bcrypt.compare(resetString, hashedResetString, (err, isMatch) => {
					if(err){
						res.json({
							status: 'FAILED',
							message: "Comparing password reset Strings failed."
						})
					}
					else if(isMatch){
						//strings match
						//hash password again
						bcrypt.hash(newPassword, 8)
						.then(hashedNewPassword => {
							//update user password

							User.updateOne({_id: userId}, {password: hashedNewPassword})
							.then(() => {
								//update completed, now clear/delete password reset record
								PasswordReset.deleteOne({userId})
								.then(() => {	
									req.flash('success_msg', "Password has been reset successfully.")
									res.redirect("/users/login")	
								})
								.catch((err) => {
									res.json({
										status: 'FAILED',
										message: "Error occured while finalizing password reset."
									})
								})
							})
							.catch((err) => {
								res.json({
									status: 'FAILED',
									message: "Error occured while updating user password."
								})
							})
						})
						.catch((err) => {
							res.json({
								status: 'FAILED',
								message: "Error occured while hashing new password."
							})
						})
					}
					else{
						res.json({
							status: 'FAILED',
							message: "Invalid password reset details passed."
						})
					}
				})
			}
		}else{
			res.json({
				status: 'FAILED',
				message: "Password reset request not found."
			})
		}
	})
	.catch((err) => {
		res.json({
			status: 'FAILED',
			message: "Checking for existing password reset record failed."
		})
	})
}

/***
 * POST
 * /login user route
 */
exports.loginUser = (req, res, next) => {
	passport.authenticate("local", {
		successRedirect: "/dashboard",
		failureRedirect: "/users/login",
		failureFlash: true
	})(req, res, next);
}

//logout user
exports.logoutUser = (req, res) => {
	req.logout((err) => {
		if(err){
			return res.render("error", {message: "Internal server error..."})
		}
	})
	req.flash("success_msg", "You are logged out")
	res.redirect("/users/login")
}