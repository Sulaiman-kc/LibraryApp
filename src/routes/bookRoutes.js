const express= require('express');
const booksRouter=express.Router();
const bookData=require('../model/Bookdata');

function router(nav){

    
    booksRouter.route('/:id')
     .get((req,res)=>{
        const id=req.params.id;
        bookData.findOne({_id:id})
         .then(function(book){
            res.render('book',
            {
                nav,
                title:book.title,
                book
            });
         });  
     });
    
    booksRouter.route('/')
     .get((req,res)=>{
         bookData.find()
         .then(function(books){
            res.render('books',
            {
                nav,
                title:'Books',
                books
            });
         });  
    });
    return booksRouter;   
}

module.exports=router;