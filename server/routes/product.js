const router=require('express').Router();

const product=require('../model/product')

router.post('/postproduct',async(req,res)=>{
    try{
        const {name ,price ,quantity,brand}=req.body;
        console.log(req.body);
        const Product = await product.create({name ,price ,quantity,brand});
        res.status(201).json(Product);
    }catch(err){
      
        console.log(err)
        res.status(400).json()
    }
})

//getroute

router.get('/getproduct',async(req,res)=>{
    try{
        //  const{name ,price ,quantity,brand}=req.body
        const Product = await product.find();
        res.status(201).json( {sucess:true, Product});
    }catch(err){
        
        console.log(err)
        res.status(500).json("Internal server error")
    }
})



module.exports=router