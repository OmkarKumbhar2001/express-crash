function apiKey(req,res,next){
    const api_key='123456';
    console.log(req.query.api_key);//from browser seach query http://localhost:3000/api/products?api_key=123456232412
    const userApiKey = req.query.api_key
    if (userApiKey&& (userApiKey===api_key)){
        next()
    }else{
        res.json({message:"Not allowed"})
    }
}
module.exports=apiKey