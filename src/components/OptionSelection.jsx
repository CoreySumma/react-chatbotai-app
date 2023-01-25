import React from "react";

export default function OptionsSelection({ arrayItems }) {
  return (
    <>
      <div className="center">
        <h1>React AI App</h1>
      </div>

      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div className="grid-child">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}