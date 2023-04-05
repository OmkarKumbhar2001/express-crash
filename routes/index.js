const router =require('express').Router();
const apiKeyMiddleware=require('../middlewares/apiKey')

// router.use(apiKeyMiddleware)for all riouter this will add middleware we can also write on main file

router.get('/',(req,res)=>{
    res.render('index',{
        title:'My Home Page'
    })
})
router.get('/about',(req,res)=>{
    // res.sendFile(path.resolve(__dirname)+'/index.html')
    res.render("about",{
        title:"My About page"
    })
})

router.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname)+'/text.txt')
})
// router.get('/api/products',apiKeyMiddleware,(req,res)=>{
//     res.json([
//         {
//         id:123,
//         name:'Chrome'
//         },
//         {
//         id:124,
//         name:'Firefox'
//         }
//     ])
// })
// router.get('/api/products',[apiKeyMiddleware,sada,asfd],(req,res)=>{ passing multiple middleware
//     res.json([
//         {
//         id:123,
//         name:'Chrome'
//         },
//         {
//         id:124,
//         name:'Firefox'
//         }
//     ])
// })


module.exports=router