import express from 'express';
import expressSession from 'express-session';

var app=express();
app.set("views","views");
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(expressSession({
    secret:"qwfghebjkbrgbnbj",
    resave:true,
    saveUninitialized:true
}));

app.get('/',(request,response)=>{
    response.render('index',{email:"",msg:""});
})

app.get('/login',(request,response)=>{
    response.render('login.ejs',{msg:''});
})

app.post('/viewInfo',(request,response)=>{
    var data=request.body;
    request.session.email=data.email;

    if(data.email=="pranjalchaturvedi63@gmail.com" && data.password=="12345"){
        response.render("index.ejs",{email:request.session.email,msg:"Login Successfull"});
    }
    else{
        response.render("login.ejs",{msg:"Invalid Email or Password"});
    }
})

app.get('/logout',(request,response)=>{
    request.session.email="";
    request.session.destroy((error)=>{
        if(error){
            console.log("Error while Logout ");
            
        }
        else{
            response.render('index.ejs',{email:"",msg:"Logout Successfully"});
        }
    })
})


app.listen(3000,()=>{
    console.log("Server connection Successfull");
})