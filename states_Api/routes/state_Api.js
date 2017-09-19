var express=require("express");
var router=express.Router();
var Letsenrol=require("../models/states.js");

//get a list of approval college

router.get("/letsenrol_state",function(req,res)
{
	Letsenrol.find({},function(err,data)
		{
          if(err) throw err;
		}).then(function(letsenrol)
		{
			res.send(letsenrol);
		});
		

});

//add approval college in 	database

router.post("/letsenrol_state",function(req,res)
{
  Letsenrol.create(req.body).then(function(letsenrol)
  {
  	res.send(letsenrol);
  });
});
//delete data from database
router.delete("/letsenrol_state/:id",function(req,res,next)
  {
     Letsenrol.findByIdAndRemove({_id:req.params.id}).then(function(letsenrol)
     {
     	res.send(letsenrol);
     	
     });
     
  });
  router.put("/letsenrol_state/:id",function(req,res,next)
  {
     Letsenrol.findByIdAndUpdate({_id:req.params.id},req.body).then(function(letsenrol)
     {
        Letsenrol.findOne({_id:req.params.id}).then(function(letsenrol)
        {
                res.send(letsenrol);
        });
      
      
     });
     
  });

module.exports=router;