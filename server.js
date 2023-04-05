const express=require("express");
const path=require('path')
const app=express();
const apikeyRouter=require('./middlewares/apiKey')
// cons'/en',t mainRoute now url works like localhost:3000/en>home page localhost:3000/en/about=> about pager=require('./routes/index')
const mainRouter=require('./routes/index')
const productRouter=require('./routes/products')
const PORT=process.env.PORT || 3000;// Set Port Value from cmd PORT=5000 node server.js

// middleware
app.set('view engine','ejs');
// app.set('views',path.resolve(__dirname)+'/templates')//chane ejs file location views to templates
app.use(express.static('public'))//we just pass which one is static folder
// console.log(app.get('view engine')) //ejs    
// console.log(app.get('views')) //we can check ejs file loaction D:\Node_React\views


// app.get('/',(req,res)=>{
//         // res.sendFile(path.resolve(__dirname)+'/index.html')
//         res.render("index",{
//             title:"My Home page"
//         })
// })
// app.get('/about',(req,res)=>{
//         // res.sendFile(path.resolve(__dirname)+'/index.html')
//         res.render("about",{
//             title:"My About page"
//         })
// })
    
// app.get('/download',(req,res)=>{
//         res.download(path.resolve(__dirname)+'/text.txt')
// })

// app.use('/en',mainRouter) now url works like localhost:3000/en>home page localhost:3000/en/about=> about page
// app.use(apikeyRouter) Global middleware
//http://localhost:3000/about/?api_key=123456 we  should use thishttp://localhost:3000/?api_key=123456 for main page
app.use(mainRouter)
app.use(productRouter)
app.listen(PORT,()=>{
    console.log(`Server start at point ${PORT}`)
})