const cart = require("../controller/cart");
const message = require("../controller/message")
const product = require("../controller/product")
const shop = require("../controller/shop")
const track = require("../controller/track")
const transport = require("../controller/transport");
const verify = require("../middleware/Auth");
const route = require("express").Router()
//middleware
route.get("/",(req,res) =>{
    return res.send("I am alive!")
})
route.post("/addcart",verify,cart.addcart)
route.get("/getcart",verify,cart.getcart)
route.post("/getmesssage",verify,message.getmessage)
route.post("/sendmesssage",verify,message.sendMessage)
route.post("/addproduct",verify,product.Add)
route.get("/productdata",verify,product.Alldata)
route.delete("/productdel",verify,product.Delete)
route.put("/productedit",verify,product.Edit)
route.get("/getproduct",verify,product.Read)
route.delete("/canceldeal",verify,shop.cancelorder)
route.post("/payment",verify,shop.paymentSuccess)
route.get("/tracklist",verify,track.Alltrack)
route.delete("/deltrack",verify,track.deltrack)
route.get("/track",verify,track.tracking)
route.get("/transportsuccess",verify,transport.delivered)
route.get("/canceltransport",verify,transport.rejected)
route.get("/updatetransport",verify,transport.updateTrack)
route.get("/post",transport.aitest)
module.exports = route;