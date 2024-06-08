import React from 'react';

// props are im-muatable they cannot be changed once a value is assigned
const Greet = (props) => {
    console.log(props);
    return <div>
        <h1> Hello {props.name} and favorite hero is {props.heroName} !</h1>
        {props.children}
    </div>
} 
export default Greet;

export const Greet1 = () => {
    return <div>
        <h1> Hello-1 Deneshwara Sai !</h1>
    </div>
}
