const express=require('express');
const signinRouter=express.Router();
function signin1(){
    console.log("hello");
} 

function router(nav){
    signinRouter.route('/signup')
    .get((req,res)=>{
        res.render('signup',
        {
            nav,
            title:'Sign Up',
        
        });
        
        
    });

    signinRouter.route('/signin')
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
