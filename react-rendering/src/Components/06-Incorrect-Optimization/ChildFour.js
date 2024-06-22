import React from "react";

export const ChildFour = ({ name }) => {
  const date = new Date();

  console.log("In Child Four Render");
  return (
    <div>
      Hello {name} {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}{" "}
    </div>
  );
};

export const MemoizedChildFour = React.memo(ChildFour);
