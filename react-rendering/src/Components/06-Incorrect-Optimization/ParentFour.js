import React, { useCallback, useMemo, useState } from "react";
import { MemoizedChildFive } from "./ChildFive";

const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  console.log("In parent Three Component.");

  const person = {
    fname: "Bruce",
    lname: "Wayne",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  const memoizedHandleClick = useCallback(handleClick, []);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> Count - {count}</button>
      <button onClick={() => setName("Williams")}> Change name </button>

      <MemoizedChildFive name={name} person={memoizedHandleClick} />
    </div>
  );
};

export default ParentThree;
