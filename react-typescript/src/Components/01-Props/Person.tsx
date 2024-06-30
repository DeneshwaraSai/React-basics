import React from "react";

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (name: PersonProps) => {
  return <div>{name.name.first} {name.name.last}</div>;
};
