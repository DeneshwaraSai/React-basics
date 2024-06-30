import React from "react";

type ButtonProps = {
  handleClick?: () => void;
  handleClick2?: () => {};
  handleEvent: (event: React.MouseEvent<HTMLButtonElement>, id : number) => void
}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.handleClick}> Click handle </button>
      <br></br>
      <button onClick={props.handleClick2}> Click handle 2 </button>
      <br></br>
      <button onClick={(event) => props.handleEvent(event, 1)}> Clicked event </button>
      <br></br>
    </div>
  );
};
