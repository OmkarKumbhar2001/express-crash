const router =require('express').Router();
const products=require('../productd_data');
router.get('/product',(req,res)=>{
    // res.sendFile(path.resolve(__dirname)+'/index.html')
    res.render("products",{
        title:"My Products page"
    })
})

router.get('/api/products',(req,res)=>{
    
    res.json(products)
})
module.exports=router