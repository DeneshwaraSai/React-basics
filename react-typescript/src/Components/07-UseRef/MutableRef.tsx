import React, { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | undefined>(undefined);

  const stopTimer = () => {
    console.log("In stop method");
    if (intervalRef) window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);

      return () => {
        stopTimer();
      };
      
    }, 2000);
  });

  return (
    <div>
      Timer - {timer}
      <br></br>
      <button onClick={stopTimer}> Stop Timer </button>
    </div>
  );
};
