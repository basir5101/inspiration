import React from "react";
import Game from "./Game";

export default function page() {
  return (
    <div className="bg-emerald-800 text-white p-5 min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl text-red-300 mb-5">Be careful</h1>
      <Game />
    </div>
  );
}
