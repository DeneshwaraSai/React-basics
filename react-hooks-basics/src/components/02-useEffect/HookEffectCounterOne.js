import React, { useEffect, useState } from "react";

function HookEffectCounterOne() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("UPDATED");
    document.title = `Clicked ${count} times.`;
  },[count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>
        {" "}
        Clicked {count} times
      </button>
    </div>
  );
}

export default HookEffectCounterOne;
