import express from 'express';
import expressSession from 'express-session'

var app=express();

app.use(expressSession({
    secret:"qwertyjn3456789x",
    resave:true,
    saveUninitialized:true
}));

app.set("views","views");
app.set("view engine","ejs");

app.get('/',(request,response)=>{
    response.render("index",{email:"",msg:""});
})

app.get('/login',(request,response)=>{
    response.render("login.ejs",{msg:""});
})

app.get('/home',(request,response)=>{
    var data=request.query;
    
    if(data.email=="pranjalchaturvedi63@gmail.com" && data.password=="12345"){
        request.session.email=data.email;
        response.render('index',{email:request.session.email,msg:"Login Successfully"});
        request.session.save();
    }
    else{
        response.render('login',{msg:"Invalid Email or Password"});
    }
    
})

app.get('/logout',(request,response)=>{
    request.session.email="";
    request.session.destroy();
    response.render('index',{email:"",msg:"LogOut Successfully"});
})

app.listen(3000,()=>{
    console.log("Connection Established Succesfully");
    
})