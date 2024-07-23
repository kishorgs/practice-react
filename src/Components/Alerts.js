import React from "react";

function Alert(props) {
  // Method to capitalize the word
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <>
      {/* Showing the alert message when the alert dialog is called */}
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.message)}</strong>
        </div>
      )}
    </>
  );
}

export default Alert;
