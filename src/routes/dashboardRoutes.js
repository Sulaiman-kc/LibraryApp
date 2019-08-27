const express=require('express');
const dashboardRouter=express.Router();

function router(nav,books,authors){
   
    dashboardRouter.route('/')
    .get((req,res)=>{
        res.render('dashboard',
        {
            nav,
            title:'Dashboard',
            books,
            authors
            
        });   
    });
    return dashboardRouter; 
}
module.exports=router;
