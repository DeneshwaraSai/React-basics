import React, { useState } from "react";

type AuthUser = {
  name: string;
  website: string;
};

export const User = () => {
  const [user, setUser] = useState<undefined | AuthUser | null>(null);
  // const [user, setUser] = useState<AuthUser>({} as AuthUser);
     
  const handleLogin = () => {
    setUser({
      name: "Google",
      website: "www.google.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}> Login </button>
      <br />
      <button onClick={handleLogout}> Logout </button>
      <br />
      {user ? (
        <div>
          <div> User name is {user?.name} </div>
          <div> User website is {user?.website} </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
