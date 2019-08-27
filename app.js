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
    

var app=express();
const booksRouter=require('./src/routes/bookRoutes.js')(nav,books);
const authorsRouter=require('./src/routes/authorRoutes.js')(nav,authors);
const signinRouter=require('./src/routes/usersRoutes.js')(nav);
const dashboardRouter=require('./src/routes/dashboardRoutes.js')(nav,books,authors);



app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/users',signinRouter);
app.use('/dashboard',dashboardRouter);

// const admin=require('./public/js/admin.js')(books);

// app.use('/',admin)

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
