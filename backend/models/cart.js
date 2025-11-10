const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const cart = new Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"userdata",require:true},
    totalQty:{type:String,default:0},
    totalbill:{type:String,default:0},
    products:{type:Array,default:[]},
})


module.exports = model("cart",cart)