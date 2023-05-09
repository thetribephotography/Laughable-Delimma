  import logo from './logo.svg';
  import logo_1 from './logo_1_1.png'
  import './App.css';
  import axios from 'axios';
  import { useState } from "react";

  function App() {
    const [content, setContent] = useState("Hey There");
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    // const [grant, setGrant] = useState(0);

    const [sentences, setSentences] = useState([
      "Hey There!",
      "What Brings you here today",
      "Sikeee!!!!",
      "Could careLess Honestly",
      "..",
      ".",
      "Its like i'm drowning at sea",
      "Hoping that you'll reach for me",
      "I would like to think you're there",
      "But I can never really know",
      "Ughhh...",
      "I'm so drunk of tragic Endings...",
      "Who Cares Anyway",
      "Head has to be low",
      "So i can make that type of money",
      "So i can cry and laugh at the same time",
      "By Myself It seems.....",
      "So what About You, Gimme Something off the top of your head...HeHeHeHe",
    ]);


    const [currentIndex, setCurrentIndex] = useState(0);
    const HTTP = "http://localhost:6500/chat";
    function handleClick(e) {
      e.preventDefault();
      // Increment the current index to display the next sentence
      if (currentIndex === sentences.length - 1) {
                
          console.log("Form Ready!");
          setFormSubmitted(true);

      } else {
        // Increment the current index to display the next sentence
        setCurrentIndex(currentIndex + 1);
      }
    }


    function handleClick2() {
      
      axios
        .post(`${HTTP}`, { prompt })
        .then((res) => setResponse(res.data))
        .catch((error) => {
          console.log(error);
        });
          console.log("Form submitted!");

          // setGrant({prompt});

      if (response) {
        return <div>{response}</div>;
      } else {
        return <div>Are You Sure About That Mate?</div>;
      }
    }

    const handlePrompt = (e) => setPrompt(e.target.value);

    return (
      <div>
        <div>
          <img className="pic" src={logo_1} alt="Logo" />
        </div>

        <div className="content">
          <div onClick={handleClick}>
            {sentences[currentIndex]}

            {currentIndex === sentences.length - 1 && (
              <form onSubmit={handleClick}>
                <input
                  type="text"
                  placeholder=""
                  value={prompt}
                  onChange={handlePrompt}
                />
                {formSubmitted}
                <button onClick={handleClick2} type="submit">
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* <div onClick={handleClick2}>
          {response ? response : "Are You Sure About That Mate?"}
        </div> */}
        </div>
      </div>
    );
  }

  export default App;
