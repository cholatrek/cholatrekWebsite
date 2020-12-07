const express = require('express');
const app = express();
const ejs = require('ejs')
const secret = require('./config/secret');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require("body-parser");
const passport = require('passport');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');

const mongoose = require('mongoose');

mongoose.connect(secret.dbURL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are already connected to the server database")
});
 
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 



const pageRoute = require ('./controllers/pageRoutes');
app.use('/',pageRoute);

const blogRoute = require ('./controllers/blogRoute');
app.use('/blog',blogRoute); 

const adminRoute = require ('./controllers/adminRoute');
app.use('/admin',adminRoute); 

const TestimonialRoute = require ('./controllers/TestimonalRoute');
app.use('/test',TestimonialRoute); 

const servicesRoute = require ('./controllers/servicesRoute');
app.use('/services',servicesRoute); 

const userRoute = require('./controllers/user');
app.use('/auth', userRoute)

const portfolio = require('./controllers/portfolio');
app.use('/port', portfolio)


const contact = require('./controllers/contact');
app.use('/', contact)

const appointment = require('./controllers/appointment');
app.use('/', appointment)

const institute = require('./controllers/institute');
app.use('/', institute)


const postRoutes = require ('./controllers/postRoutes');
app.use('/',postRoutes) 

const registrationRoute = require ('./controllers/registration');
app.use('/',registrationRoute) 


app.listen(secret.PORT, ()=>{
    console.log("we are connected to the server");
});