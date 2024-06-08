import React from "react";

const Hello = () => {
  /* This is given by JSX. */
  // return (
  //     <div>
  //         <h1> Hello Sai </h1>
  //     </div>
  // )

  // Using JS
  return React.createElement(
    "div",
    {id : 'hello', className: 'hello'},
    React.createElement("h1", null, "Hello Sai")
  );
};

export default Hello;
