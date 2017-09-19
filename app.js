var express=require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var routes=require("./approval_Api/routes/api.js");
var state_routes=require("./states_Api/routes/state_Api.js");
var partner_college=require("./partner-colleges-universities/routes/partner_college_Api.js");
//set up express app
var app=express();
//connect to mongodb
mongoose.connect('mongodb://test:test@ds123534.mlab.com:23534/todo',{ useMongoClient: true });
mongoose.Promise=global.Promise;
app.use(express.static(__dirname+'/Knight'));
app.use(bodyParser.json());
app.use("/api",require("./approval_Api/routes/api.js"));
app.use("/api",require("./states_Api/routes/state_Api.js"));
app.use("/api",require("./partner-colleges-universities/routes/partner_college_Api.js"));
// listen for request
 app.listen(process.env.port || 2000,function()
 {
 	console.log("now listening for request");
 });
