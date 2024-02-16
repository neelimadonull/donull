import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  }
  const handleSend = () => {
    setPrompt("");
    axios.post(`http://18.222.212.128/post-prompt/${prompt}`)
    .then(res=>{
      console.log("reponse from prompt backend");
      console.log(res);
      setOutput(res.data);
    });

  }
  return (
    <div className="App">
      <header >
        <h1>Welcome To DoNull</h1>
      </header>
      <input type="text" style={{ marginRight: "20px" }} onChange={(e) => handlePromptChange(e)} value={prompt} ></input>
      <button onClick={() => handleSend()}>send</button>
      <h2>{output}</h2>
    </div>
  );
}

export default App;
