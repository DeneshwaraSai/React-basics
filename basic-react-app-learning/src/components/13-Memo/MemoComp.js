import React from 'react'

function MemoComp({name}) {
    console.log("Rendering memo component function.")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp);
/* React.memo method will only render if the shallow copy 
 * of prev and current is not same.
*/