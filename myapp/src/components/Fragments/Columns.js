import React from 'react'

function Columns() {

    const items = [1,2,3,4,5,6,7,8,9];
  return (
    // <div>
    //   <td> Name  </td>
    //   <td> Deneshwara Sai Ila </td>
    // </div>
    
    /* 
    Here we will get an error in the console like
    Warning: validateDOMNesting(...): <div> cannot appear as a child of <tr>. at div
    */
    // <React.Fragment>
    //     <td> Name : </td>
    //     <td> Deneshwara Sai Ila </td>
    // </React.Fragment>

    //              (OR)
    <>        
        <td> Name : </td>
        <td> Deneshwara Sai Ila </td>
    </>
  )
}

export default Columns
