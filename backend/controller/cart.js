const Cart = require("../models/cart");

const addcart = async(req,res)=>{
    try {
        const {userId,totalQty,totalbill,products} = req.body;
        const record = new Cart({
            userId:req.user,
            totalQty,
            totalbill,
            products
        })
        await record.save();
        return res.status(200).json({message:"updated"});
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:"internal server error"})
    }
}
const getcart = async()=>{
    try {
        const data = await Cart.findById(req.user);
        return res.status(200).json({message:data}) 
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message:"internal server error"});
    }
}

module.exports = {
addcart,getcart
}