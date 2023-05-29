  import logo from './logo.svg';
  import logo_1 from './logo_1_1.png'
  import './index.css';
  import axios from 'axios';
  import { useState } from "react";

  function App() {
    const [content, setContent] = useState("Hey There");
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const HTTP = "http://localhost:6500/chat"; 
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


    function handleClick2 (e) {
      e.preventDefault();
      axios
        .post(`${HTTP}`, { prompt }, { withCredentials: false })
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
      <div className="bodie">
        <div className="contain">
            <div
              className="fire card_edit card card-4 p-4 bg-dark text-center h-45 bg-transparent"
              onClick={handleClick}
            >
              <div className="">
                {sentences[currentIndex]}

                {currentIndex === sentences.length - 1 && (
                  <form onSubmit={handleClick}>
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-light text-black border border-secondary-subtle m-2"
                        placeholder="Say Something"
                        id="floatingTextarea"
                        value={prompt}
                        onChange={handlePrompt}
                      ></textarea>
                      {/* <label for="floatingTextarea">Comments</label> */}
                    </div>

                    <button
                      className="btn btn-light text-bg-success m-2"
                      onClick={handleClick2}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                )}

                {formSubmitted === true}
                <div onClick={handleClick2}>
                  {response}

                  {/* {formSubmitted === false}
          <div onClick={handleClick2}> {"Are You Sure About That Mate?"} </div> */}
                </div>
              </div>
            </div>
            <div className='pic'></div>
            {/* </div> */}
          </div>
        </div>
    );
  }

  export default App;
