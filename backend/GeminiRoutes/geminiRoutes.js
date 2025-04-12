const router = require('express').Router();
const { generateSummary } = require('./gemini');

router.post("/summarize", async (req, res) => {
  const { length, tone, inputText } = req.body;
  try {
    const summary = await generateSummary(length, tone, inputText);
    res.status(200).send({ summary: summary });
  } catch (error) {
    console.error("Error generating summary:", error);
    res.status(500).json({
      error: "An error occurred while generating the summary",
    });
  }
});

module.exports = router;
