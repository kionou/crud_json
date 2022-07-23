const { request,response } = require("express");





const controlleurBlog = class{
    static AccueilPost = (req=request,res=response)=>{
        res.json(req.body)
         console.log(req.body);
    }

}

module.exports=controlleurBlog
