const express = require('express');
const cors = require('cors');
require('dotenv').config();
const geminiRoutes = require("./GeminiRoutes/geminiRoutes");
const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: ["https://quickdigest.vercel.app", "http://localhost:5173"],
  optionsSuccessStatus: 200,
  credentials: true,
};


app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', geminiRoutes)

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server is running on :${port}`);
});

module.exports = app;