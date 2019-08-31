const express=require('express');
const dashboardRouter=express.Router();
const bookData=require('../model/Bookdata');
const authorData =require('../model/Authordata');
const {ensureAuthenticated} = require('../config/auth')

function router(nav){
   
    dashboardRouter.route('/', ensureAuthenticated)
    .get((req,res)=>{
        bookData.find().then(function(books){
            authorData.find().then((authors)=>{
                res.render('dashboard',
                {
                    nav,
                    title:'Dashboard',
                    books,
                    authors
                });
            })
         });
    });

    dashboardRouter.route('/addauthor')
    .get((req,res)=>{
        var item = {
            name: req.param('name'),
            dob: req.param('dob'),
            place: req.param('place'),
        }        
        var author = new authorData(item);
        author.save();
        res.redirect('/dashboard');
    });
    dashboardRouter.route('/addbook')
    .get((req,res)=>{
        var item1 = {
            title: req.param('book_title'),
            genre: req.param('genre'),
            author: req.param('author'),
        }
        var book = new bookData(item1);
        book.save();
        res.redirect('/dashboard');
    });

    dashboardRouter.route('/updatebook/:id')
     .get((req,res)=>{
        const id=req.params.id;
        bookData.findOne({_id:id})
        .then(function(book){
           res.render('updatebook',
           {
               nav,
               title:'Edit Book',
               book
               
           });
        });
    });

    dashboardRouter.route('/updateauthor/:id')
     .get((req,res)=>{
        const id=req.params.id;
        authorData.findOne({_id:id})
        .then(function(author){
           res.render('updateauthor',
           {
               nav,
               title:'Edit Author',
               author
               
           });
        });
    });


    dashboardRouter.route('/updatebook/editbook/:id')
     .get((req,res)=>{
        const id=req.params.id;
        bookData.update({_id:id},{title: req.param('book_title'),genre: req.param('genre'),author: req.param('author')})
        .then(function(){
           res.redirect('/dashboard');
        });
    });
    dashboardRouter.route('/updateauthor/editauthor/:id')
    .get((req,res)=>{
       const id=req.params.id;
       authorData.update({_id:id},{name: req.param('name'),dob: req.param('dob'),place: req.param('place')})
       .then(function(){
          res.redirect('/dashboard');
       });
   });


    dashboardRouter.route('/deletebook/:id')
     .get((req,res)=>{
        const id=req.params.id;
        bookData.deleteOne({_id:id})
         .then(function(){
            res.redirect('/dashboard');
         });  
     });
     dashboardRouter.route('/deleteauthor/:id')
     .get((req,res)=>{
        const id=req.params.id;
        authorData.deleteOne({_id:id})
         .then(function(){
            res.redirect('/dashboard');
         });  
     });
     
    return dashboardRouter; 
}
module.exports=router;
