var mongoose=require("mongoose");
var Schema=mongoose.Schema();
var Letsenrol_Schema= new mongoose.Schema({
	id:{
		type:Number

	},
	text:{
		type:String
	}
});

var Letsenrol=mongoose.model('letsenrol_state',Letsenrol_Schema);
module.exports=Letsenrol;