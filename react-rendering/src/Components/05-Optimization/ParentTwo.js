import React, { useState } from 'react'
import { MemoizedChildTwo } from './ChildTwo';

const ParentTwo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('John');

    console.log("In parent Two Component.");
    
    return (
      <div>
          <button onClick={() => setCount((c) => c + 1)}> Count - {count}</button>
          <button onClick={() => setName('Williams')}> Change name </button>
          <MemoizedChildTwo name={name}/>
      </div>
    )
}

export default ParentTwo;
