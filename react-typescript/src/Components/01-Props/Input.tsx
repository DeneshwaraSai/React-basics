import React from "react";

type InputProps = {
    value:string;
    handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

  return (
    <div>
      <input type='text' onChange={handleInputChange} value={props.value} />
    </div>
  )
}