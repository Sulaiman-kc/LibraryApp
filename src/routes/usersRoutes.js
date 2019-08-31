const express=require('express');
const signinRouter=express.Router();
const userData=require('../model/Userdata');
var errors = '';
var error = '';
var success = '';
var item=[];

function router(nav){

    signinRouter.route('/adduser')
    .get((req,res)=>{
        const cemail=req.param('email');
        userData.find({ email: cemail})
        .then(function(user){
            item = {
                first_name: req.param('first_name'),
                last_name: req.param('last_name'),
                email: req.param('email'),
                number: req.param('number'),
                password: req.param('password'),
                confirm_password: req.param('confirm_password'),
            }

            if(user != ''){
                errors = 'Email already exist'
                res.redirect('/users/signup'); 
            }else{
                var user = new userData(item);
                if (user.first_name == "")                                  
                { 
                    error = 'Enter the First Name'
                    res.redirect('/users/signup'); 
                } 
            
                else if (user.last_name == "")                               
                { 
                    error ='Enter the Last Name'
                    res.redirect('/users/signup');
                } 
                
                else if (user.email == "")                                   
                { 
                    error = 'Enter the Email'
                    res.redirect('/users/signup'); 
                } 
            
                else if (user.email.indexOf("@", 0) < 0)                 
                { 
                    error = 'Enter the valid Email'
                    res.redirect('/users/signup'); 
                } 
            
                else if (user.email.indexOf(".", 0) < 0)                 
                { 
                    error = 'Enter the valid Email'
                    res.redirect('/users/signup'); 
                } 
                else if (user.number == "")                           
                { 
                    error = 'Enter the Mobile Number'
                    res.redirect('/users/signup'); 
                }   
                else if (!Number.isInteger(Number(user.number)))                           
                { 
                    error = 'Enter the valid Mobile Number'
                    res.redirect('/users/signup'); 
                } 
                else if (user.number.length != 10)                           
                { 
                    error = 'Enter the valid Mobile Number'
                    res.redirect('/users/signup'); 
                } 
            
                else if (user.password == "")                        
                { 
                    error = 'Enter the Password'
                    res.redirect('/users/signup'); 
                } 
                else if (user.password.length < 8)                        
                { 
                    error = 'Password must contain 8 letters'
                    res.redirect('/users/signup'); 
                } 
            
                else if (user.confirm_password == "")                        
                { 
                    error = 'Enter the Confirm Password'
                    res.redirect('/users/signup'); 
                } 
                else if (user.confirm_password != user.password)                        
                { 
                    error = 'Password dose not match'
                    res.redirect('/users/signup'); 
                }
                else{
                    success = 'You are sucessfully Registered '
                    user.save();
                    res.redirect('/users/signin');
                }    
            }
        });
    });

    signinRouter.route('/signup')
    .get((req,res)=>{
        res.render('signup',
        {
            nav,
            title:'Sign Up',
            errors,
            error,
            item
        
        });
        errors = '';
        error = '';
        item.last_name = ''
        item.first_name = ''
        item.email = ''
        item.number = ''
        item.password = '' 
        item.confirm_password = ''       
    });

    signinRouter.route('/signin')
        .get((req,res)=>{
            res.render('signin',
            {
                nav,
                title:'Sign In',
                errors,
                success
            }); 
            success = ''
            errors = ''
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
                errors = 'Incorrect Email or password'
                res.redirect('/users/signin')
            }

        });
    });
    return signinRouter; 
}
module.exports=router;
