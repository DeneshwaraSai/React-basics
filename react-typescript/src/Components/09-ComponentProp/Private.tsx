import React from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};
export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn)
    return (
      <div>
        <Component name="Deneshwara Sai Ila" />
      </div>
    );
  return (
    <div>
      <Login />
    </div>
  );
};
