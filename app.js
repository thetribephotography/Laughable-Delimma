const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const mainRoute = require("./src/routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);


app.get("/", (req, res) => {
  res.send("Server Running");
});




const port = process.env.ACCESS_PORT || 6500;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
