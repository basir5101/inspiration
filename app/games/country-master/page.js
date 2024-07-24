import React from "react";
import Game from "./Game";

export default function page() {
  return (
    <div className="bg-lime-800 text-white min-h-screen p-10">
      <h1 className="text-2xl my-5">How many countries you have remember?</h1>
      <Game />
    </div>
  );
}
