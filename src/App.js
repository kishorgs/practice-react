//Importing all the use full packages and components
import "./App.css";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { useState } from "react";
import Alert from "./Components/Alerts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // All the states for the application
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // method to show the alert dialog
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // Method to toggle between dark and light mode
  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#000000";
      document.body.style.color = "#ffffff";
      showAlert("dark mode has been enabled", "success");
      document.title = "This is light mode";

      //Code to change the title of the document for every second
      // setInterval(() => {
      //   document.title = "This is amazing mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "This is worst mode";
      // }, 1000);
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      showAlert("light mode has been enabled", "success");
      document.title = "This is dark mode";
    }
  };

  return (
    <>
      <Router>
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

        {/* Alert message dialog */}
        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                heading="TextUtils"
                commentsLabel="Comments is good"
                convertButton="Convert to uppercase"
                characters="Your text summary"
                mode={darkMode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" exact element={<About />} />
          <Route path="/users" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

//Exporting the app component
export default App;
