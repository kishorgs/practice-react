//Import all the useful packages and components
import React, { useState } from "react";

function Home(props) {
  //Declaring the all the useful states
  const [text, setText] = useState("");

  //Method to get the change in the textBox
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //Method to convert the text to uppercase
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  //Method to convert the text to lowercase
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  //Method to Clear the textfield
  const handleClearClick = () => {
    setText("");
  };

  //Method to copy the text to clipboard
  const handleCopyClick = () => {
    text.select();
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard");
  };

  //Method to remove extra spaces in the textFiled
  const handleRemoveSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  //Rendering the JSX
  return (
    <>
      {/* Main container JSX Code */}
      <div className="container d-block p-3 w-100">
        <h1>{props.heading}</h1>

        {/* Text area to take input text */}
        <div class="form-floating">
          <textarea
            className="form-control my-3"
            id="floatingTextarea2"
            value={text}
            onChange={handleOnChange}
            style={{ height: "300px" }}
          ></textarea>
          <label for="floatingTextarea2">{props.commentsLabel}</label>
        </div>

        {/* Button to convert text to uppercase */}
        <button
          type="button"
          onClick={handleUpClick}
          class="btn btn-primary btn-lg mx-2"
        >
          {props.convertButton}
        </button>

        {/* Button to convert text to lowercase */}
        <button
          type="button"
          onClick={handleLowClick}
          class="btn btn-primary btn-lg mx-2"
        >
          {props.convertButton}
        </button>

        {/* Button to clear the text */}
        <button
          type="button"
          onClick={handleClearClick}
          class="btn btn-primary btn-lg mx-2"
        >
          Clear
        </button>

        {/* Button to copy text to clip board */}
        <button
          type="button"
          onClick={handleCopyClick}
          class="btn btn-primary btn-lg mx-2"
        >
          Copy text
        </button>

        {/* Button to remove extra spaces */}
        <button
          type="button"
          onClick={handleRemoveSpaceClick}
          class="btn btn-primary btn-lg mx-2"
        >
          Remove extra space
        </button>
      </div>

      {/* Container after the textBox */}
      <div className="container my-3">
        <h2>{props.characters}</h2>

        {/* Text to show number of words and characters */}
        <p>
          {text.split(" ").length - 1} word and {text.length} characters
        </p>

        <p>{0.008 * text.split(" ").length} minutes read</p>

        {/* Preview of the text */}
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Home;
