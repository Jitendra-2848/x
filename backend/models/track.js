const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const track = new Schema({
    user:{type:mongoose.Schema.Types.ObjectId,require:true},
    tracking_id:{type:String,require:true},
    places:{type:Array,require:true,default:[]},
    reached:{type:String},
    status:{type:String,enum :["Delivered","Delivering","Shipping"]}
})

module.exports = model("track",track);