import React from "react";

export const ChildFive = ({ name, handleClick }) => {
  console.log("In Child Five Render");
  return <div>Hello {name}</div>;
};

export const MemoizedChildFive = React.memo(ChildFive);
