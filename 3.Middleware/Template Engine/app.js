import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

var app=express();
app.set('views','views');
app.set('view engine','ejs');
var bookDetails=[
    {
        bookName:"Programming in C",
        authorName:"Dennis Ritchie",
        price:435
    },
    {
        bookName:"Programming in C++",
        authorName:"Bjarne Stroustrup",
        price:463
    },
    {
        bookName:"Programming in Java",
        authorName:"James Gosling",
        price:435
    }
]

app.get('/',(req,res)=>{
    res.render('page1',{bookDetails,username:"Pranjal"});
})

app.listen(process.env.PORT,()=>{
    console.log("Server connection Successful");
    
})