import React, {useState} from 'react';


export default function Navbar(props) {
  const handleUpClick = () =>{
    // console.log("Converted to UpperCase" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () =>{
    // console.log("Converted to UpperCase" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange =(event) =>{
    // console.log("On change");
    setText(event.target.value);
  }


  const[text, setText] = useState("");
  return (
    <>
  <div className="container" style= {{color: props.mode==="dark"?"white" : "#042743"}}>
    <h2>{props.heading}</h2>
    <div className='mb-3'>
    <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode==="dark"?"grey" : "white",color: props.mode==="dark"?"white" : "#042743"}}id="exampleFormControlTextarea1" rows="8"></textarea>
    
  </div>
  <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
  <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
  </div>
  <div className="container my-3" style= {{color: props.mode==="dark"?"white" : "#042743"}}>
    <h2>Your text summary </h2>
    <p>{text.trim().split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.trim().split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
  </div>
  </>
  
  );
}


