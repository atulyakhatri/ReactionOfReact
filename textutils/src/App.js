// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textbar from './components/TextForm';
// import About from './components/About';
import './App.css';
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }


  return (
    <>

      <Navbar title="TextUtilss" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title = "TextUtilss"/> */}
      <div className='container my-3'>
        <Textbar heading="Enter the text to analyze" mode={mode}/>
        {/* <About /> */}
      </div>


    </>

  );
}

export default App;
