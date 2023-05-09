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
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

app.post("/chat", async (req, res) => {
    const{prompt} = req.body;
    try{
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          max_tokens: 512,
          temperature: 1,
        //   role: user,
        //   content: `${prompt}`,
          prompt:
            `You are to unapologetically mean and decisive and ask upfront questions if need be when replying what i say here: ${prompt}`,
        });

    // You are to unapologetically mean and decisive and ask upfront questions if need be when replying what i say here: ${prompt}

        res.send(completion.data.choices[0].text);
        console.log(completion.data.choices[0].text);


    } catch(e){
        console.log(e);
    }
    
    // console.log(completion.data.choices[0].text);

});

const port = process.env.ACCESS_PORT || 6500;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});