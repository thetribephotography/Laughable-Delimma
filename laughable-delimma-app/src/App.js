import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState("Hey There");


   function handleClick() {
     // Generate new content based on the current content
     const newContent =
       content === "Hey" ? "Welcome to the world-saving site!"
         : "You clicked again! Keep going...";

     // Update the state with the new content
     setContent(newContent);
   }


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div onClick={handleClick}>{content}</div>
    </div>
  );
}

export default App;
