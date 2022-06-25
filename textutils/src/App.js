// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textbar from './components/TextForm';
// import About from './components/About';
import './App.css';
import React, { useState } from "react";
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled!", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled!", "success")
    }
  }


  return (
    <>

      <Navbar title="TextUtilss" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Navbar title = "TextUtilss"/> */}
      <div className='container my-3'>
        <Textbar heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
        {/* <About /> */}
      </div>


    </>

  );
}

export default App;
