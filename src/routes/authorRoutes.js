const express=require('express');
const authorsRouter=express.Router();


function router(nav){
var authors=[
    {
        Name:'Arthur Conan Doyle',
        DOB:'May 22,1859',
        Place:'Edinburgh,Scotland',
        image:'a1.jpeg'
    },
    {
        Name:'John Green',
        DOB:'24 August,1977',
        Place:'Indiana,United States',
        image:'a2.jpg'
    },
    {
        Name:'Ruth Ames',
        DOB:'28 September,1940',
        Place:'New York,United States',
        image:'a3.jpeg'
    }
]

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