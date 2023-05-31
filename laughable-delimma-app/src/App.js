import Typewriter from "typewriter-effect";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [content, setContent] = useState("Hey There");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const HTTP = "http://localhost:6500/chat";
  // const [grant, setGrant] = useState(0);

  const [sentences, setSentences] = useState([
    "Hey There!",
    "What Brings you here Today",
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

  function handleClick() {
    // e.preventDefault();
    // Increment the current index to display the next sentence
    if (currentIndex === sentences.length - 1) {
      console.log("Form Ready!");
      setFormSubmitted(true);
    } else {
      // Increment the current index to display the next sentence
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handleClick2(e) {
    e.preventDefault();
    axios
      .post(`${HTTP}`, { prompt }, { withCredentials: false })
      .then((res) => setResponse(res.data))
      .catch((error) => {
        console.log(error);
      });
    console.log("Form submitted!");

    if (response) {
      return <div>{response}</div>;
    } else {
      return <div>Are You Sure About That Mate?</div>;
    }
  }

  const handlePrompt = (e) => setPrompt(e.target.value);

  return (
    <div className="bodie">
      <div className="contain">
        <div
          className="card_edit card card-4 p-4 text-center "
          onClick={handleClick}
        >
          <div className="">
            <Typewriter
              options={{
                strings: [sentences[currentIndex]],
                autoStart: true,
                loop: false,
                cursor: "|",
                delay: 20,
                deleteSpeed: Infinity,
              }}
            />
            {/* {sentences[currentIndex]} */}

            {currentIndex === sentences.length - 1 && (
              <form onSubmit={handleClick}>
                <div className="form-floating">
                  <textarea
                    className="form-control bg-transparent text-white border border-light-subtle m-2"
                    placeholder="Say Something"
                    id="floatingTextarea"
                    value={prompt}
                    onChange={handlePrompt}
                  ></textarea>
                </div>

                <button
                  className="btn text-bg-success m-2"
                  onClick={handleClick2}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
            {formSubmitted === true}
            <div onClick={handleClick2}>{response}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
