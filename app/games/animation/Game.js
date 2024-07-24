"use client";
import React, { useEffect, useState } from "react";

export default function Game() {
  const [results, setResults] = useState([
    {
      top: 30,
      left: 30,
    },
  ]);
  const handleClick = async () => {
    if (results.length < 1) {
      const array = [];
      for (let i = 0; i < 30; i++) {
        const top = parseInt(Math.random() * 1000);
        const left = parseInt(Math.random() * 300);
        array.push({ top: top, left: left });
      }
      setResults(array);
    }
  };
  useEffect(() => {
    setInterval(() => {
      handleClick();
      console.log("hi");
    }, 2000);
  }, []);
  return (
    <div>
      {results.map((item, index) => (
        <div
          style={{
            position: "absolute",
            top: `${item.top}px`,
            left: `${item.left}px`,
          }}
          key={index}
          className="h-8 w-8 transition-all animate-bounce delay-1000 flex justify-center items-center bg-red-50 rounded-full"
        >
          {" "}
          {item.top}{" "}
        </div>
      ))}
    </div>
  );
}
