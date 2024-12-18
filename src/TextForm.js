import React, {useState} from 'react'

export default function TextForm(props) {

  const[text,setText] = useState('');

   const handleUpClick =()=>{
    // console.log("btn clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
   }
  
   const handleOnChange =(event) =>{
          // console.log("on change");
          setText(event.target.value);
   }
     
   const handleLowClick=()=>{
    // console.log("btn clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
   }

   const handleClearClick=()=>{
    let newText = '';
    setText(newText);
   }

   const handleCopy=()=>{
    let copyText = document.getElementById("floatingTextarea");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    // alert("text is copied to clipboard !");
   }

   const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
   }


  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
      <div className="form-floating">
  <textarea className="form-control" id="floatingTextarea"  value={text} onChange={handleOnChange} rows="20" cols="30" style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
  <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to lowercase</button>
  <button className="btn btn-danger my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-success my-2 mx-2" onClick={handleCopy}>Copy Text</button>
 <button className="btn btn-success my-2 mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your word summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008* text.split(" ").length} : Minute to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

