import React, { useCallback, useMemo, useState } from "react";
import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFour } from "./ChildFour";

const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  console.log("In parent Three Component.");

  const person = {
    fname: "Bruce",
    lname: "Wayne",
  };

  const MemoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  const MemoizedHandleClick = useCallback(handleClick, []);
  
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> Count - {count}</button>
      <button onClick={() => setName("Williams")}> Change name </button>
      {/* <MemoizedChildThree name={name}>
        <strong> Hello </strong>
      </MemoizedChildThree> */}

      <MemoizedChildFour
        name={name}
        person={MemoizedPerson}
      ></MemoizedChildFour>
    </div>
  );
};

export default ParentThree;
