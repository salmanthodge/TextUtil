import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!","success");
  };
  const handleLowClick = () => {
    // console.log("uppercase was clicked")
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!","success");
  };
  const handleClearClick = () => {
    // console.log("uppercase was clicked")
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!","success");
  };
  const handleOnChange = (event) => {
    // console.log("On Changed")
    setText(event.target.value);
  };

  const handleCopy =() =>
  {
    // console.log("i am copy");
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to clipboard!","success");

  }
  const handleExtraSpaces =() =>
  {
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success");
  }

  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color:props.mode ==='dark'?'white':'#0d1562'}}>
      <div className="mb-3">
        <h3 className="mb-3">{props.heading}</h3>
        <textarea  className="form-control" value={text} placeholder="enter text here" onChange={handleOnChange} id="myBox" rows="8"
          style={{backgroundColor:props.mode ==='dark'?'#5969be':'white',
        color:props.mode ==='dark'?'white':'black'}}
        ></textarea>
        <button disabled={text.length ===0} className="btn btn-primary  mx-1 my-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-3" onClick={handleClearClick}>
          Clear the text
        </button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-3" onClick={handleCopy}>
          Copy the text
        </button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-3disabled={text.length ===0} " onClick={handleExtraSpaces}>
          Handle Extra Spaces
        </button>
      </div>
    </div>
    <div className="container" style={{color:props.mode ==='dark'?'white':'#0d1562'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * (text.split(/\s+/).filter((element)=>{return element.length!==0}).length)}  Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
    </>
  );
}
