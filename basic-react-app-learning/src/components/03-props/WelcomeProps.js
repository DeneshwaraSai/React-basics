import React, { Component } from "react";

class WelcomeProps extends Component {

    render () {
        return (
        <div>
            <h1> Class Component - {this.props.name} </h1>
            {this.props.children}
        </div>
        )
    }
}

export default WelcomeProps;