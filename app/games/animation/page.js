import React from "react";
import Game from "./Game";

export default function page() {
  const arrays = [];
  for (let i = 0; i < 1000; i++) {
    const top = parseInt(Math.random() * 1000);
    const left = parseInt(Math.random() * 300);
    arrays.push({ top: top, left: left });
  }
  return (
    <div className="bg-purple-600 h-screen max-w-screen-sm overflow-hidden p-5">
      <h1 className="text-2xl">Animation Maker</h1>
      <Game />
    </div>
  );
}
