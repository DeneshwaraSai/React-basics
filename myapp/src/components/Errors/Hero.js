import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    return new Error("Not a hero");
  }
  return <div>Hi, {heroName}</div>;
}

export default Hero;
