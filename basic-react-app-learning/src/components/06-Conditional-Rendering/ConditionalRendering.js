import React, { Component } from "react";
/*
 1) IF ELSE 
 2) Element variable
 3) Terenary operator
 4) Short Circult operator
*/
class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
    };
  }

  render() {
    /* 1) If-Else Approach */
    /*
    if (this.state.loggedIn)
        return (<div> <h1> Welcome Deneshwara Sai </h1> </div>)
    else
        return <div> Welcome Guest </div> 
    */

    /* 2) Element variable Approach */
    /*
    let message;
    if (this.state.loggedIn)
      message = (
        <div>
          <h1> Welcome Deneshwara Sai </h1>{" "}
        </div>
      );
    else 
        message = <div> Welcome Guest </div>;

    return <div> { message } </div>;
    */



    /*  3) Terenary operator */
    /*
    return this.state.loggedIn ? (
      <div>
        <h1> Welcome Deneshwara Sai </h1>
      </div>
    ) : (
      <div> Welcome Guest </div>
    );
    */


    /* 4) Short Circult operator */

    return this.state.loggedIn &&  <div> <h1> Welcome Deneshwara Sai </h1> </div>

  }
}

export default ConditionalRendering;
