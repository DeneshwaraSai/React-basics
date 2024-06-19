import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function DocTitleHook() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Count - {count}
      </button>
    </div>
  );
}

export default DocTitleHook;
