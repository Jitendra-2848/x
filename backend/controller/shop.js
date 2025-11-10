const { api } = require("../middleware/transporter");
const message = require("../models/message");
const shop = require("../models/shop");
const track = require("../models/track")
const { v4: uuidv4 } = require('uuid');
const paymentSuccess = async (req, res) => {
    try {
        const { id, status, location } = req.body;
        const rand = uuidv4();
        const record = new shop({
            vendor: id,
            tracking_id: rand,
            status: status,
        })
        const Ai_gen_places =
            await api({
                apiKey: process.env.API_KEY,
                systemPrompt: process.env.PROMPT_LOCATION,
                content: { from: location.from, to: location.to },
            });
        const trackrec = new track({
            user: id,
            tracking_id: rand,
            places: Ai_gen_places,
            status: "Shipping",
        })
        await record.save();
        await trackrec.save();
        const detail = {
            message: "order placed!",
            tracking_id: rand,
            places: Ai_gen_places,
        }
        return res.status(200).json(detail)
    } catch (error) {
        console.error("Error in sendMessage:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}
const cancelorder = async () => {
    try {
        const { id } = req.body;
        await shop.deleteOne({ tracking_id: id })
        await track.deleteOne({ tracking_id: id })
        return res.status(200).json({ message: "Delete successfully" })
    } catch (error) {
        console.error("Error in sendMessage:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = {
    paymentSuccess, cancelorder
}