const express=require('express');
const signinRouter=express.Router();


function router(nav){
  
    signinRouter.route('/')
        .get((req,res)=>{
            res.render('signin',
            {
                nav,
                title:'Sign In',
            
            });
            
        });
        return signinRouter;   
    }
    
    module.exports=router;
