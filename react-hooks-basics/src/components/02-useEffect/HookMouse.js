import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("LOG MOUSE POSITION : " );
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("IN USE EFFECT");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("IN CLEAN UP, unmounting the mouse move event");
      window.removeEventListener('mousemove', logMousePosition);
    }
  }, []);

  return (
    <div>
      Hooks : X : {x} Y : {y}
    </div>
  );
}

export default HookMouse;
