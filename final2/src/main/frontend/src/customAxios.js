import React, { useState, useEffect } from "react";

function Test() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch("/web/demo/hello")
      .then((response) => response.text())
      .then((message) => {
        setMessage(message);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{message}</h1>
      </header>
    </div>
  );
}

export default Test;
