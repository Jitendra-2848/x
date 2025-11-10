const Product = require("../models/Product");
// const product = require("../models/Product");

const Add = async(req,res)=>{
    try {
        const {Product_name,Product_price,Product_status,Product_image} = req.body;
        const record = new Product({
            userId:req.user,
            Product_name,
            Product_price,
            Product_status,
            Product_image,
        })
        await record.save()
        return res.status(200).json({message:"Product Added!"});
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:"Something went wrong!"})
    }
}
const Edit = async(req,res)=>{
    try {
        const {Product_id,Product_name,Product_price,Product_status,Product_image} = req.body;
        const product = await Product.findByIdAndUpdate(Product_id,{Product_name,Product_price,Product_status,Product_image});
        return res.status(200).json({message:"Edit successfull"});
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:"something went wrong"})
    }
}
const Delete = async()=>{
    try {
        const {Product_id} = req.body;
        const product = await Product.findByIdAndDelete(Product_id);
        return res.status(200).json({message:"Delete successfull"});
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:"something went wrong"})
    }
}
const Alldata = async()=>{
    try {
        // const {id} = req.body;
        const allitem = await Product.find({});
        return res.status(200).json({message:allitem})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:"something went wrong"})
    }
}
const Read = async()=>{
    try {
        const data = await Product.findById({userId:req.user})
        return res.status(200).json({message:data})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:"something went wrong"})
    }
}


module.exports = {
    Add,Edit,Delete,Read,Alldata
}