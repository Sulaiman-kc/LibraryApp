const express=require('express');
const authorsRouter=express.Router();
const authorData =require('../model/Authordata')


function router(nav){

     authorsRouter.route('/:id')
     .get((req,res)=>{
        const id=req.params.id;
        authorData.findOne({_id:id})
         .then(function(author){
            res.render('author',
            {
                nav,
                title:book.title,
                author
            });
         });  
     });
    

    authorsRouter.route('/')
     .get((req,res)=>{
         authorData.find()
         .then(function(authors){
            res.render('authors',
            {
                nav,
                title:'Authors',
                authors
            });
         });  
    });
    return authorsRouter;   
}

module.exports=router;