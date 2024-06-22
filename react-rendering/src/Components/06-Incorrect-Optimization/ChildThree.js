import React from "react";

export const ChildThree = ({ name, children }) => {
  console.log("In child Three Component.");

  return (
    <div>
      {children} {name}
    </div>
  );
};

export const MemoizedChildThree = React.memo(ChildThree);
