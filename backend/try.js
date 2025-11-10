const { api } = require("./middleware/transporter");
require("dotenv").config();

const aitest = async () => {
    try {
        const result = await api({
            apiKey: process.env.API_KEY,
            systemPrompt: prompt_2,
            // ✅ Pass a plain object, not an array
            content: { from: 382405, to: 400001 },
        });

        console.log("✅ AI Response:", result);
        return result;
    } catch (error) {
        console.error("❌ Error in aitest:", error.message);
        throw new Error("Internal server error");
    }
};

// Run test
aitest();
