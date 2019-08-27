const express= require('express');
const booksRouter=express.Router();


function router(nav,books){

    
    booksRouter.route('/:id')
     .get((req,res)=>{
        const id=req.params.id;
    
        res.render('book',
            {
                nav,
                title:'Books',
                book:books[id]
            });
     });
    
    booksRouter.route('/')
     .get((req,res)=>{
        res.render('books',
        {
            nav,
            title:'Books',
            books
        });
        
    });
    return booksRouter;   
}

module.exports=router;