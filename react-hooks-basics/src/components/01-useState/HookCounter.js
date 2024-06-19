import React, { useState } from "react";

function HookCounter() {

  const [count, setCount] = useState(0);
  // const [current_count_value, method_for_count] = useState(initial_value)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Count {count} </button>
    </div>
  );
}

export default HookCounter;
