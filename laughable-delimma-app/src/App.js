  import logo from './logo.svg';
  import './App.css';
  import axios from 'axios';
  import { useState } from "react";

  function App() {
    const [content, setContent] = useState("Hey There");
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    function handleClick() {
      // Generate new content based on the current content and the click count
      const clickCount = content.split(" ").length;
      const newContent = `${clickCount}`;

      // Update the state with the new content
      setContent(newContent);
    }

    return (
      <div class="content">
        <div onClick={handleClick}>{content}</div>
      </div>
    );
  }

  export default App;
