import React, { useState } from "react";

const initialState = {
  fname: "kane",
  lname: "Willam",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState);

  const changeName = () => {
    // person.fname = "John";
    // person.lname = "Clark";
    // setPerson(person);

    const prevPerson = { ...person };
    prevPerson.fname = "John";
    prevPerson.lname = "Clark";
    setPerson(prevPerson);
  };

  console.log("Rendered ObjectUseState");

  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};
