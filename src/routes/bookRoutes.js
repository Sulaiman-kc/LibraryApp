const express= require('express');
const booksRouter=express.Router();


function router(nav){
    var books=[
        {
            title:'Sherlock Holmes',
            genre:'Detective',
            author:'Arthur Conan Doyle',
            image:'b1.jpg'
        },
        {
            title:'Fault in Our Stars',
            genre:'Romance,Emotional',
            author:'John Green',
            image:'b2.jpg'
        },
        {
            title:'At First Bite',
            genre:'Paranomal Fiction',
            author:'Ruth Ames',
            image:'b3.jpg'
        }
    ]
    
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