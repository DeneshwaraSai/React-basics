import React, { useContext } from "react";
import { UserContext } from "./UserContext";


export const User = () => {
  const UserContextConsumer = useContext(UserContext);

  const handleLogin = () => {
    console.log("Login");
    UserContextConsumer?.setUser({
      name: 'John Williams',
      email: 'john@gmail.com',
    })
  };
  const handleLogout = () => {
    console.log("Logout");
    UserContextConsumer?.setUser({
      name: 'Guest',
      email: 'guest@gmail.com',
    })
  };

  return (
    <div>
      <button onClick={handleLogin}> Login </button>
      <button onClick={handleLogout}> Logout </button>
     
      <div> User name is {UserContextConsumer?.user?.name} </div>
      <div> User email is {UserContextConsumer?.user?.email} </div>
    </div>
  );
};
