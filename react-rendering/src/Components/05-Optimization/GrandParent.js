import React, { useState } from "react";
import ParentOne from "./ParentOne";
import ChildOne from "./ChildOne";

const GrandParent = () => {
  const [count, setCount] = useState(0);
    console.log("Grand Parent Component.")
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> Grand Parent - {count} </button>
        <ParentOne newCount={count}> 
            <ChildOne />
        </ParentOne>
    </div>
  );
};

export default GrandParent;
