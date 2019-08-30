const express=require('express');
const signinRouter=express.Router();
const userData=require('../model/Userdata');
var errors = [];

function router(nav){

    signinRouter.route('/adduser')
    .get((req,res)=>{
        const cemail=req.param('email');
        userData.find({ email: cemail})
        .then(function(user){
            if(user!=''){
                errors.push({msg: 'Email already exist'})
                res.redirect('/users/signup'); 
            }else{
                var item = {
                    first_name: req.param('first_name'),
                    last_name: req.param('last_name'),
                    email: req.param('email'),
                    number: req.param('number'),
                    password: req.param('password'),
                    confirm_password: req.param('confirm_password'),
                }
                var user = new userData(item);
                user.save();
                res.redirect('/users/signin');
            }

        });

        
    });

    signinRouter.route('/signup')
    .get((req,res)=>{
        res.render('signup',
        {
            nav,
            title:'Sign Up',
            errors
        
        });
        
        
    });

    signinRouter.route('/signin')
        .get((req,res)=>{
            res.render('signin',
            {
                nav,
                title:'Sign In',
                errors
            }); 
        });
    signinRouter.route('/checkuser')
    .get((req,res)=>{
        const cemail=req.param('email');
        const cpassword=req.param('password');        
        userData.find({$and:[{ email: cemail},{password: cpassword}]})
        .then(function(user){
        console.log(user)
            if(user!=''){
                res.redirect('/dashboard'); 
            }else{
                errors.push({msg: 'Incorrect Email or password'})
                res.redirect('/users/signin')
            }

        });
    });
    return signinRouter; 
}
module.exports=router;
