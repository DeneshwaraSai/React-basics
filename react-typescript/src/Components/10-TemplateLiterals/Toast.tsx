import React from "react";

type HorizontalPosition = "left" | "center" | "right";
type VertitalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VertitalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};
