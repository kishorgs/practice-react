//Importing all the use full packages and components
import "./App.css";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState("light");

  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#000000";
      document.body.style.color = "#ffffff";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    }
  };

  return (
    <>
      {/* Navbar component is rendered here */}
      <Navbar
        title="Kishor"
        home="Home"
        about="About"
        dropdown="Dropdown"
        action="Action"
        anotherAction="Another action"
        somethingElse="Something Else"
        disabled="Disabled"
        search="Search"
        mode={darkMode}
        toggleMode={toggleMode}
      />

      {/* Home component is rendered here */}
      <Home
        heading="TextUtils"
        commentsLabel="Comments"
        convertButton="Convert to uppercase"
        characters="Your text summary"
      />

      {/* About component is rendered here */}
      <About />
    </>
  );
}

//Exporting the app component
export default App;
