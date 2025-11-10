const { api } = require("../middleware/transporter");
const track = require("../models/track");


const updateTrack = async(req,res)=>{
    try {
        const {id,reachedAt} = req.body;
        const detail = await track.findByIdAndUpdate(id,{ reached:reachedAt , status:"Delivering"});
    } catch (error) {
        console.error("Error in sendMessage:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}
const delivered = async(req,res)=>{
    try {
        const {id,reachedAt,status} = req.body;
        const detail = await track.findByIdAndUpdate(id,{ reached:reachedAt,status:"Delivered"});
    } catch (error) {
        console.error("Error in sendMessage:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}
const rejected = async(req,res)=>{
    try {
        const {id} = req.body;
        //currently not having that much functionality for this entity! 
    } catch (error) {
        console.error("Error in sendMessage:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}
const aitest = async()=>{
    try {
        await api({ 
            apiKey:process.env.api_key,
            systemPrompt:
            `Give me the exact driving distance (as per Google Maps) between the following two Indian pincodes: [PINCODE_1] and [PINCODE_2].
            Respond only in JSON with the following structure — no extra text, no symbols, no explanation:
            {
            "pincode_from": "[PINCODE_1]",
            "pincode_to": "[PINCODE_2]",
            "distance": "X km"
            }
            The distance value must be exact as per Google Maps driving route (not approximate, not aerial distance).`,
            content: {from:382405,to:400001}
        });

        //  const result = await api({
        //     apiKey: process.env.API_KEY,
        //     systemPrompt: prompt_2,
        //     // ✅ Pass a plain object, not an array
        //     content: { from: 382405, to: 400001 },
        // });

        // console.log("✅ AI Response:", result);
        // return result;

    } catch (error) {
        console.error("Error in sendMessage:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = {
updateTrack,delivered,rejected,aitest
}