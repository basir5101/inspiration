"use client";
import React, { useState } from "react";

export default function Game() {
  const [clickCount, setClickCount] = useState(0);
  const [results, setResults] = useState([]);
  const handleClick = async () => {
    setClickCount(clickCount + 1);
    if (clickCount > 1) {
      for (let i = 0; i < 1000; i++) {
        const top = parseInt(Math.random() * 1000);
        const left = parseInt(Math.random() * 300);
        Promise.resolve(setTimeout(() => {}, 1000));
        setResults((pre) => [...pre, { top: top, left: left }]);
      }
    }
  };

  return (
    <div className="bg-emerald-800">
      <div>
        <button
          onClick={handleClick}
          className={`btn ${
            clickCount === 0
              ? "btn-primary"
              : clickCount === 1
              ? "btn-secondary"
              : "btn-error"
          }`}
        >
          {clickCount === 0
            ? "Do not click here"
            : clickCount === 1
            ? "Please do not click"
            : "This is last warning. Do not click"}{" "}
        </button>
      </div>
      {results?.length > 0 &&
        results.map((item, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${item.top}px`,
              left: `${item.left}px`,
              animationDelay: index * 1000,
              animation: `hidden ${index * 2}ms ease-in-out`,
            }}
            className={`bg-white mb-5 border text-error border-error font-semibold p-3 m-5 overflow-visible`}
          >
            <div>Virus has been detected</div>
          </div>
        ))}
    </div>
  );
}
