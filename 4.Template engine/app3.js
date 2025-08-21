import express from 'express';
var app=express();
app.set("views","views");
app.set("views engine");

const bookDetails=[
    {
        bookName:"Programming in c",
        authorName:"Dennis Ritchie",
        price:123
    },
    {
        bookName:"Java Programming",
        authorName:"James Gosling",
        price:572
    },
    {
        bookName:"Programming in c++",
        authorName:"Bjarne Stroupstrup",
        price:764
    }
];

app.get("/",(request,response)=>{
    response.render("page3.ejs",{bookDetails})
})

app.listen(3000,()=>{
    console.log("Server connection successfull");
    
})