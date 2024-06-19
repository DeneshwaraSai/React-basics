import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        
        <input
          type="text"
          onChange={(e) => setName({... name, firstName: e.target.value })}
        />

        <input
          type="text"
          onChange={(e) => setName({... name, lastName: e.target.value })}
        />

      </form>

      <p> Your first name is - {name.firstName} </p>
      <p> Your last name is - {name.lastName} </p>
      <p> { JSON.stringify(name) } </p>
    </div>
  );
}

export default HookCounterThree;
