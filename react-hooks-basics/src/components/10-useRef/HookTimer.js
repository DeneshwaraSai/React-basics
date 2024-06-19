import React, { useEffect, useRef, useState } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div>
      Hook Timer : {timer}
      <br></br>
      <button onClick={() => clearInterval(interval.current)}>Clear Interval</button>
    </div>
  );
}

export default HookTimer;
