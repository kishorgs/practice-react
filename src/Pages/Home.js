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
    props.showAlert("Converted to uppercase", "success");
    console.log("Uppercase");
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
    if (text) {
      text.select();
      navigator.clipboard.writeText(text);
      alert("Text copied to clipboard");
      props.showAlert("Text has been copied", "warning");
    } else {
      alert("Please enter a text");
    }
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
        <div className="form-floating">
          <textarea
            className="form-control my-3"
            id="floatingTextarea2"
            value={text}
            onChange={handleOnChange}
            style={{
              height: "300px",
              background: props.mode === "dark" ? "black" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <label htmlFor="floatingTextarea2" color="red">
            {props.commentsLabel}
          </label>
        </div>

        {/* Button to convert text to uppercase */}
        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-primary btn-lg mx-2"
        >
          {props.convertButton}
        </button>

        {/* Button to convert text to lowercase */}
        <button
          type="button"
          onClick={handleLowClick}
          className="btn btn-primary btn-lg mx-2"
        >
          {props.convertButton}
        </button>

        {/* Button to clear the text */}
        <button
          type="button"
          onClick={handleClearClick}
          className="btn btn-primary btn-lg mx-2"
        >
          Clear
        </button>

        {/* Button to copy text to clip board */}
        <button
          type="button"
          onClick={handleCopyClick}
          className="btn btn-primary btn-lg mx-2"
        >
          Copy text
        </button>

        {/* Button to remove extra spaces */}
        <button
          type="button"
          onClick={handleRemoveSpaceClick}
          className="btn btn-primary btn-lg mx-2"
        >
          Remove extra space
        </button>
      </div>

      {/* Container after the textBox */}
      <div className="container my-3">
        <h2>{props.characters}</h2>

        {/* Text to show number of words and characters */}
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          word and {text.length} characters
        </p>

        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>

        {/* Preview of the text */}
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}

export default Home;
