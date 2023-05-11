const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");


const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  organization: "org-Q2IPECzTf6rjnjrd1junAI1A",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);
app.use((req, res, next) => {
  // Set the CORS headers
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});


const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: false,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.post("/chat", async (req, res) => {
    const{prompt} = req.body;
    try{
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          max_tokens: 100,
          temperature: 1,
          prompt: `You are to unapologetically mean and decisive and ask upfront questions if need be when replying what i say here: ${prompt}`,
        });
        

        res.send(completion.data.choices[0].text); 
        // res.send(result);
        // console.log(result);


    } catch(e){
        console.log(e);
    }
    
    // console.log(completion.data.choices[0].text);

});

const port = process.env.ACCESS_PORT || 6500;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});