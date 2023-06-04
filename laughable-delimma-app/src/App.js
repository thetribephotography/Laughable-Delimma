import Typewriter from "typewriter-effect";
import axios from "axios";
import { useState, useEffect } from "react";
import {motion, MotionConfig} from 'framer-motion';

function App() {
  const [content, setContent] = useState("Hey There");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expandCard, setExpandCard] = useState(false);
  const HTTP = "http://localhost:6500/chat";
  // const [grant, setGrant] = useState(0);

  const screen = "50vh";

  const [sentences, setSentences] = useState([
    ".",
    "So",
    "Want to Do Soething Good Today?",
    "Or You Just Came to Have Fun?",
    "Questions..... Questions...",
    "Could careLess Honestly",
    "Intermidiate Clownery",
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

        if (currentIndex >= 0) {
          setExpandCard(true);
        }

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

  // 

  return (
    <MotionConfig transition={{ duration: 2 }}>
      <div className="bodie">
        <div className="contain">
          <motion.div
            layout
            // animate={expandCard ? { scale: 1 } : { scale: 0.5 }}
            className="card_edit bg-transparent card card-4 p-4 text-center"
            onClick={handleClick}
          >
            {expandCard && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: screen, width: "50vh" }}
                className="expanded"
              >
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
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );


}

export default App;
