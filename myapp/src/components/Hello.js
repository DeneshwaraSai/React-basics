import React from 'react';

const Hello = () => {
    // return <div>
    //     <h1> Hello Dineshwara Sai </h1>
    // </div>
    console.log("Hello World");
    return React.createElement('div', { id: 'info', className: 'infoClass' }, React.createElement('h1', null, 'Hi Dineshwara Sai Ila'));
}

export default Hello;