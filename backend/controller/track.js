const message = require("../models/message");
const track = require("../models/track")

const tracking = async (req, res) => {
    try {
        const { id } = req.body;
        const detail = await track.find({ tracking_id: id }).select("-user");
        return res.status(200).json({ message: detail })
    } catch (error) {
        console.error("Error in sendMessage:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}
const Alltrack = async (req, res) => {
    try {
        const {id} = req.body;
        const detail = await track.find({user:id}).select("tracking_id reached status");
        return res.status(200).json({message:detail})
    } catch (error) {
        console.error("Error in sendMessage:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}
const deltrack= async()=>{
    try {
        const {id} = req.body;
        const del = await track.findByIdAndDelete(id);
        return res.status(200).json({message:"Delete Successfully!"});
    } catch (error) {
        console.error("Error in sendMessage:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = {
tracking,Alltrack,deltrack
}