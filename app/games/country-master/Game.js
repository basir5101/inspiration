"use client";
import React, { useEffect, useState } from "react";
import { countries } from "../countries";

export default function Game() {
  const [findingLetter, setFindingsLetter] = useState("");
  const [numbers, setNumbers] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(null);
  const [list, setList] = useState([]);
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const getAlphabet = () => {
    setResult(null);
    const randomNumber = parseInt(Math.random() * 100);
    if (alphabets[randomNumber]) {
      const letter = alphabets[randomNumber];
      const country = countries.find(
        (country) =>
          country.country.at(0).toLowerCase() === letter.toLowerCase()
      );
      console.log("country: ", country);
      if (country) {
        setFindingsLetter(letter);
        const numberOfCountries = countries.filter(
          (country) => country.country.toLowerCase().at(0) == letter
        );
        setNumbers(numberOfCountries.length);
        setList(numberOfCountries);
      } else {
        getAlphabet();
      }
    } else {
      getAlphabet();
    }
  };
  useEffect(() => {
    getAlphabet();
  }, []);
  const handleSubmit = () => {
    const country = countries.find(
      (country) =>
        country.country.toLowerCase() == userInput.trim().toLowerCase()
    );

    console.log(country, userInput.trim().toLowerCase());
    setResult(country);
  };
  return (
    <div>
      <h2>
        Type a country start with letter:{" "}
        <span className="animate-pulse">{findingLetter.toUpperCase()}</span>{" "}
      </h2>
      <div> Number of countries: {numbers} </div>
      {result && (
        <div className="grid grid-cols-4 mt-5 gap-5">
          {list.map((l, i) => (
            <div className="bg-pink-800 text-center py-5 rounded-lg" key={i}>
              {l.country}
            </div>
          ))}
        </div>
      )}
      <div>
        <input
          className="input input-bordered mt-5 text-black"
          type="text"
          placeholder="type country name"
          value={userInput}
          onChange={(e) => {
            // if (userInput !== "") {
            //   if (userInput.at(0) != findingLetter) {
            //     alert(`type country name start with letter ${findingLetter}`);
            //   }
            // }
            setUserInput(e.target.value);
          }}
        />
        <button onClick={handleSubmit} className="btn btn-secondary ml-2">
          Submit
        </button>
        <button onClick={getAlphabet} className="btn btn-info ml-2">
          Reload
        </button>
      </div>
      <div>
        {result && (
          <>
            <h1 className="mt-3 text-lg">Country: {result.country} </h1>
            <h1 className="text-lg">Region: {result.region} </h1>
          </>
        )}
      </div>
    </div>
  );
}
