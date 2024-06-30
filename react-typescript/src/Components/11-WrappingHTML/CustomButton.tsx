import React from "react";

type CustomButtomProps = {
    varient: 'primary' | 'secondary';
    children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({varient, children, ...rest}: CustomButtomProps) => {
  return <div>
    <button className={`class-with-${varient}`} {...rest}> {children} </button>
  </div>;
};
