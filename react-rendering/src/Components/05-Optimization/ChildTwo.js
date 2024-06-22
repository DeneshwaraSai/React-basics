import React from "react";

export const ChildTwo = () => {
  console.log("In child Two Component.");

  return <div>Child Component.</div>;
};

export const MemoizedChildTwo = React.memo(ChildTwo);
