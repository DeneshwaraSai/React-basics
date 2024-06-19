import React from 'react'

const GreetProps = (props) =>{
    console.log(props)
    return (
        <div>
            <h1> Hii {props.name} a.k.a {props.heroName} </h1>
            {props.children}
        </div>
    )
}

export default GreetProps;