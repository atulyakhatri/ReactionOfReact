import React, { useState } from 'react';


export default function Navbar(props) {
  const handleUpClick = () => {
    // console.log("Converted to UpperCase" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  }

  const handleLowClick = () => {
    // console.log("Converted to UpperCase" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }

  const handleClear = () => {
    setText("")
    props.showAlert("Cleared text", "success")
  }
  
  const handleCopy = ()=>{
    let nweText = document.getElementById("exampleFormControlTextarea1");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(nweText.value);
    props.showAlert("Copied to clipboard", "success")
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
    setText(newText.trimEnd().trimStart())
    props.showAlert("Removed extra spaces!", "success")
  }

  // const handletrim = () => {
  //   let newText = text.trimEnd().trimStart()
    
  // }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h2>{props.heading}</h2>
        <div className='mb-3'>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042743" }} id="exampleFormControlTextarea1" rows="8"></textarea>

        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Trim</button>
        <button className='btn btn-primary mx-1' onClick={handleClear}>Clear</button>
        {/* <button className='btn btn-primary mx-1' onClick={handletrim}>Trim</button> */}
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy</button>

      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h2>Your text summary </h2>
        <p>{text.trimEnd().trimStart().split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.trim().split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>

  );
}


