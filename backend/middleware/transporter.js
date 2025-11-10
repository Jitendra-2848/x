const { GoogleGenAI } = require("@google/genai");

async function api({ apiKey, systemPrompt, content, model = "gemini-2.5-flash" }) {
  if (!apiKey) throw new Error("Missing apiKey");
  if (!systemPrompt) throw new Error("Missing systemPrompt");
  if (!content) throw new Error("Missing content");
  try {
    const aiClient = new GoogleGenAI({ apiKey });
    let userMessage = "";
    if (Array.isArray(content)) {
      const first = content[0];
      if (first && first.from && first.to) {
        userMessage = `pincode from ${first.from} to ${first.to}`;
      } else {
        userMessage = JSON.stringify(content);
      }
    } else if (typeof content === "object" && content.from && content.to) {
      userMessage = `pincode from ${content.from} to ${content.to}`;
    } else {
      userMessage = String(content);
    }

    const contents = [{ role: "user", parts: [{ text: userMessage }] }];

    const response = await aiClient.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.8,
      },
    });

    return response.text || "No response text from AI.";
  } catch (error) {
    console.error("❌ Error generating AI content:", error.message);
    return "Error generating AI content.";
  }
}

module.exports = { api };
