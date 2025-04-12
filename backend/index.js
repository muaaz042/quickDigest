const express = require('express');
const cors = require('cors');
require('dotenv').config();
const geminiRoutes = require("./GeminiRoutes/geminiRoutes");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', geminiRoutes)

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server is running on :${port}`);
});

module.exports = app;