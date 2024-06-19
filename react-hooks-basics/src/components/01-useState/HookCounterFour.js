import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItems] = useState([]);

  const addItems = () => {
    console.log("In addItems()");
    setItems([
      ...items,
      {
        id: items.length + 1 ,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItems}> Add {items.length} </button>
      <ul>
        {items.map((item) => (
          <div key={item.id}>
            <li> {item.id} {item.value} </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;
