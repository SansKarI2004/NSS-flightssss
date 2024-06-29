const express=require('express')
const app=express()
const userModel=require("./models/user")
const LoginModel=require("./models/login")
const path=require('path')




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))



app.get('/',function(req,res){
    res.render('index')
})

app.get('/login',function(req,res){
    res.render('admin')
})

app.post('/applogin',function(req,res){
    res.render('options')
})


app.get('/passenger',function(req,res){
    res.render('passenger')
})

app.get('/seatassignment',function(req,res){
    res.render('seat assignment')
})

app.get('/info',function(req,res){
    res.render('info')
})

app.get('/update',function(req,res){
    res.render('update')
})
app.get('/addflight',function(req,res){
    res.render('addflight')
})
app.get('/news',function(req,res){
    res.render('news')
})
app.get('/aboutus',function(req,res){
    res.render('aboutus')
})
app.get('/flights',function(req,res){
    res.render('flights')
})

app.get('/signup',function(req,res){
    res.render('signup')
})
app.get('/book',function(req,res){
    res.render('book')
})

app.listen(3000)