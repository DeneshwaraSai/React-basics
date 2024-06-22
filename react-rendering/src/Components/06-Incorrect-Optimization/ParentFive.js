import React, { useCallback, useMemo, useState } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFive = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  const person = {
    fname: "Bruce",
    lname: "Wayne",
  };

  const handleClick = () => { };

  console.log("In parent Five Component.");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> Count - {count}</button>
      <button onClick={() => setName("Williams")}> Change name </button>
      <MemoizedChildFive name={name} handleClick={handleClick} />
    </div>
  );
};
