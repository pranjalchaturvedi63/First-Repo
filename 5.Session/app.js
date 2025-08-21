import express from 'express';
import url from 'url';
import expressSession from 'express-session';
var app=express();

app.set("views","views");
app.set('view engine','ejs');

app.use(expressSession(
    {
        secret:"qwerthbnmoiuytdc4345678",
        resave:true,
        saveUninitialized:true
    }));

app.get('/',(requset,response)=>{
    response.render('index.ejs',{email:"",msg:""}); 
})

app.get('/login',(request,response)=>{
    response.render("login.ejs",{msg:""});
})
app.get('/home',(request,response)=>{
    // var data=url.parse(request.url,true).query;
    var data=request.query;
    // response.send(data.email+ " "+data.password);
    if(data.email=="pranjalchaturvedi63@gmail.com" && data.password=="12345"){
        console.log(request.session);

        request.session.email=data.email;
        console.log(request.session);
        request.session.save();
        
        response.render("index",{email:request.session.email,msg:""})
    }
    else{
        response.render('login',{msg:"Email id or Password is incorrect"});
    }
}) 

app.get('/logout',(request,response)=>{
    request.session.email="";
    request.session.destroy((error)=>{
        if(error)
            console.log("Error while Destroying the session");
        else
            console.log("Session Destroyed Successfully");
            response.render("index",{email:"",msg:"LogOut Successfully"})
        
    })
})


app.listen(3000,()=>{
    console.log("Server connection Successfull");
    
})