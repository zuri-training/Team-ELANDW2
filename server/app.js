require("dotenv").config();
const express = require("express");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const port = process.env.PORT || 3000;
const flash = require("connect-flash");
const passport = require("passport");
const HomeRoutes = require("./server/routes/priceCompareRoutes");
const userRoutes = require('./server/routes/usersRoute');
const path = require('path');


const app = express();


require("./server/authentication/middleware/passport")(passport)

require("./server/models/database");
TODO://change directroty when done

// Ejs to use html and js to render for the frontend
app.use(expressLayouts); 
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.set("layout", "./layouts/main");

app.use(express.urlencoded({extended: true}));
app.use(
	session({
		secret: process.env.SECRET,
		resave: true,
		saveUninitialized: true
	})
);
//Passport intialization and authentication
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(function(req, res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg')
	res.locals.error = req.flash('error')
	next()
});

app.use("/", HomeRoutes);
app.use("/users", userRoutes);


app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})