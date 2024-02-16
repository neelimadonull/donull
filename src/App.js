import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [prompt, setPrompt] = useState("");
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  }
  const handleSend = () => {
    setPrompt("");
  }
  return (
    <div className="App">
      <header >
        <h1>Welcome To DoNull</h1>
      </header>
      <input type="text" style={{marginRight:"20px"}} onChange={(e) => handlePromptChange(e)} value={prompt} ></input>
      <button onClick={() => handleSend()}>send</button>
    </div>
  );
}

export default App;
