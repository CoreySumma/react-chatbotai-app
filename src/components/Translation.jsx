import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  return (
    <>
    <div className="center">
      <h1>Response:</h1>
      <textarea 
        className="text-area"
        cols={55} 
        rows={20} 
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>Do Your Thing</button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
    </>
  )
}