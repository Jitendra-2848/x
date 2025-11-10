const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const product = new Schema({
    userId: {type:mongoose.Schema.Types.ObjectId,ref:"userdata",require:true},
    Product_name : {type:String,require:true},
    Product_price : {type:String,require:true},
    Product_status : {type:String, default:"Out-Of-Stock"},
    Product_image:{type:String,require:true},
    special_price:{type:String,default:null}
})

module.exports = model("Product",product);