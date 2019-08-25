const express=require('express');
const chalk=require('chalk');
const path=require('path');
const nav=[
    {
        link:'/books',
        title:'Books'
    },
    {
        link:'/authors',
        title:'Authors'
    },
    {
        link:'/users/signin',
        title:'Sign In'
    },
    {
        link:'/users/signup',
        title:'Sign Up'
    }
    ];
   

var app=express();
const booksRouter=require('./src/routes/bookRoutes.js')(nav);
const authorsRouter=require('./src/routes/authorRoutes.js')(nav);
const signinRouter=require('./src/routes/usersRoutes.js')(nav);



app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/users',signinRouter);



app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');




app.all('/',function(req,res){
    res.render('index',
    {
        nav,
        title:'Library'
        });
    
});
app.listen(3000,function(){
    console.log("listening to port" + chalk.green("3000"));
});
