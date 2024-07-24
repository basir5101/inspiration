import React from "react";
import Game from "./Game";

export default function page() {
  return (
    <div className="bg-indigo-800 min-h-screen text-white px-4">
      <div className="text-center py-5 text-yellow-200 text-3xl">
        <h1> আপনার ভাগ্য যদি না হয় ফাঁকা </h1>
        <h1 className="mt-3 text-white"> চলতে পারে আপনার ঘড়ির চাকা </h1>
      </div>
      <hr className="mb-3" />
      <Game />
    </div>
  );
}
