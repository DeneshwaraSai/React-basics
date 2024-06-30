import React, { useState } from "react";

export const LoggedIn = () => {

    const[isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log("Login");
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    console.log("Logout");
    setIsLoggedIn(false);
  };

  return <div>
    <button onClick={handleLogin}> Log-in </button>
    <br/>
    <button onClick={handleLogout}> Log-out </button>
    <br/>
    <div> User is {isLoggedIn ? 'logged-in' : 'logged-out'}. </div>
  </div>;
};
