const express=require('express');
const authorsRouter=express.Router();


function router(nav,authors){

authorsRouter.route('/:id')
    .get((req,res)=>{
        const id=req.params.id;
    
        res.render('author',
            {
                nav,
                title:'Authors',
                author:authors[id]
            });
     });
    
authorsRouter.route('/')
    .get((req,res)=>{
        res.render('authors',
        {
            nav,
            title:'Authors',
            authors
        });
        
    });
    return authorsRouter;   
}

module.exports=router;