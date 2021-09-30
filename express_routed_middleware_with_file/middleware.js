module.exports=function(req,res,next){
    console.log("Original url is "+req.originalUrl);
    next();
}