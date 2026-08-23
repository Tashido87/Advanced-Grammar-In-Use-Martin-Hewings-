import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check API
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "Advanced Grammar Master" });
  });

  // AI Grammar Explainer & Sentence Diagnostic Assistant
  app.post("/api/ask-grammar", async (req, res) => {
    try {
      const { question, context, unitTitle, language = "my" } = req.body;
      if (!question) {
        return res.status(400).json({ error: "Question is required" });
      }

      const ai = getGenAI();
      if (!ai) {
        return res.json({
          reply: `**Note on Grammar Rule:**\nBased on *Advanced Grammar in Use (Martin Hewings)*:\n- In advanced English, distinguish subtle nuances (e.g. State vs Dynamic meaning of verbs, inversion structures, subjunctive, ellipsis).\n\n*(AI Assistant is ready in offline reference mode. For real-time AI generation, provide GEMINI_API_KEY in settings.)*`
        });
      }

      const prompt = `You are an expert Cambridge English Grammar Master specializing in "Advanced Grammar in Use" by Martin Hewings (B2-C2 levels).
The user is a learner (B2 Intermediate level) seeking clear, precise, and practical explanations.

Context provided:
Unit / Topic: ${unitTitle || "Advanced English Grammar"}
Rule Context: ${context || "General"}
Target Output Language: ${language === "my" ? "Myanmar (Burmese) with clear English terms & examples" : "English"}

User Query:
${question}

Provide a concise, crystal-clear explanation:
1. State the exact grammatical rule clearly.
2. Provide 2-3 clear contrast examples (Right vs Wrong / Difference in nuance).
3. If language is Myanmar/Burmese, give clear Burmese explanation using natural teaching tone so a B2 learner can easily remember and apply it.
Keep formatting clean with bullet points and bold highlights. Avoid fluff.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      res.json({ reply: response.text || "No response generated." });
    } catch (err: any) {
      console.error("Error in /api/ask-grammar:", err);
      res.status(500).json({ error: err.message || "Failed to get grammar explanation." });
    }
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Advanced Grammar Master server running on http://localhost:${PORT}`);
  });
}

startServer();
