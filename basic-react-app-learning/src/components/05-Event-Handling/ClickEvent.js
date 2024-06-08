import React from "react";

function ClickEvent() {
  function clickHandler() {
    console.log("button Clicked");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default ClickEvent;
