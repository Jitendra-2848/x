const jwt = require("jsonwebtoken");
const user = require("../models/user");

const verify = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized - Token missing" });
        }
        const decoded = jwt.verify(token, process.env.Secret_key);
        const user = await user.findById(decoded.userId).select("-pass");
        if (!user) {
            return res.status(404).json({ message: "Unauthorized - User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("Authorization error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = verify;
