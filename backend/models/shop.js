const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const payment = new Schema({
    vendor:{type:mongoose.Schema.Types.ObjectId,require:true},
    tracking_id:{type:String,require:true},
    status:{type:String,enum :["Success","Pending","Bad debt"]}
})

module.exports = model("payment",payment);