import React from "react";

function Person({person}) {
  console.log(person);
  return (
    <div>
      I am {person.name}. I am {person.age} years old. I know {person.skill}.
    </div>
  );
}

export default Person;
