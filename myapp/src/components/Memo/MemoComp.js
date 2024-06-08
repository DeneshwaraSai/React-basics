import React from 'react'

function MemoComp({name}) {
    console.log("In memo component.")
  return (
    <div>
      Memo Component {name}
    </div>
  )
}

export default React.memo(MemoComp);
