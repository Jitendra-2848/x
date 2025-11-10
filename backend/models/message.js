const mongoose = require("mongoose");
const {Schema,model} = mongoose


const messageSchema = new mongoose.Schema({
  role: { type: String, enum: ["vendor", "farmer"], required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  bargain:{type:Object,default:{}}
});


const user = new mongoose.Schema({
    vendor :{type:mongoose.Schema.Types.ObjectId,ref:"userdata",require:"true"},
    farmer : {type:mongoose.Schema.Types.ObjectId,ref:"userdata",require:"true"}
});
const message = new Schema({
    user:{type:user,require:true},
    message:{type:[messageSchema],default:[]},
    offer:{},
})
module.exports = model("message",message)