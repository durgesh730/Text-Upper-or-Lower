import React, { useState } from 'react'
import './textform.css';

export default function Textform(props) {

  const handleupclick = (e) => {
    e.preventDefault();
    let newtext = text.toUpperCase();
    settext(newtext);
  }

  const handleloclick = (e) => {
    e.preventDefault();
    let newtext = text.toLowerCase();
    settext(newtext);
  }

  const handleclearclick = (e) => {
    e.preventDefault();
    let newtext = " ";
    settext(newtext);
  }

  const handleonchange = (event) => {
    event.preventDefault();
    text = '  ';
    settext(event.target.value)
  }

  var [text, settext] = useState('');

  return (
    <>
      <div className='container'>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="7"></textarea>
          </div>
          <button className='btn convert mx-2 my-2' onClick={handleupclick}> Convert to Uppercase</button>
          <button className='btn convert mx-2 my-2' onClick={handleloclick}> Convert to Lowercase</button>
          <button className='btn convert mx-2 my-2' onClick={handleclearclick}> Clear</button>
        </form>

      </div>

      <div className='container'>
        <div className='textdiv'>
          <div><h3>Text Summary</h3>
            <span>{text.split("").length} Words and {text.length} Characters </span>
            <p>{0.08 * text.split("").length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text}</p></div>
        </div>
      </div>
    </>
  )
}
