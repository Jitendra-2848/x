const message = require("../models/message")

const getmessage = async (req, res) => {
    try {
        const { vendor, farmer } = req.body;
        const data = await message.findOne({ user: { vendor: vendor, farmer: farmer } })
        return res.status(200).json({ message: data })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "internal server error" });
    }
}
const sendMessage = async (req, res) => {
    const { vendor, farmer, message } = req.body;
    if (!vendor || !farmer) {
        return res.status(400).json({ message: "Vendor and farmer IDs are required." });
    }
    try {
        let data = await message.findOne({ 'user.vendor': vendor, 'user.farmer': farmer });
        if (!data) {
            data = await new message({
                user: { vendor, farmer },
            }).save();
        }
        return res.status(200).json({ conversation: data });
    } catch (error) {
        console.error("Error in sendMessage:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}
// const bargain = async (req, res) => {
//     // We expect vendor, farmer IDs, the structured offer, and the role of the sender
//     const { vendor, farmer, offer, role } = req.body; 

//     if (!vendor || !farmer || !offer || !role) {
//         return res.status(400).json({ message: "Missing required fields (vendor, farmer, offer, or role)." });
//     }
//     const contentMessage = `${offer.GivenBy} made an offer of ${offer.offer}.`;
//     const newOfferMessage = {
//         role: role,
//         content: contentMessage, 
//         bargain: offer,
//     };
//     try {
//         const data = await Message.findOneAndUpdate(
//             { 'user.vendor': vendor, 'user.farmer': farmer },
//             { 
//                 $set: { offer: offer },
//                 $push: { message: newOfferMessage } 
//             },
//             { 
//                 new: true,      
//                 upsert: true,   
//                 runValidators: true 
//             }
//         );
        
//         // 4. Respond with the updated conversation
//         return res.status(200).json({ 
//             message: "Offer recorded and conversation updated.",
//             conversation: data,
//         });

//     } catch (error) {
//         if (error.name === 'ValidationError') {
//              return res.status(400).json({ message: `Validation Error: ${error.message}` });
//         }
//         return res.status(500).json({ message: "Internal server error" });
//     }
// };

module.exports = {
getmessage,sendMessage
}