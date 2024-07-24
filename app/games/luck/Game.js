"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Game() {
  const [initialAmount, setInitialAmount] = useState(100);
  const [numbers, setNumbers] = useState([]);
  const [play, setPlay] = useState(false);
  const [selected, setSelected] = useState(false);
  const [answer, setAnswer] = useState("");
  const [wrong, setWrong] = useState(false);
  const [replay, setReplay] = useState(false);

  const checkAns = (array) => {
    const random = parseInt(Math.random() * 10);
    console.log(random, array);
    if (array[random] !== undefined) {
      return array[random];
    } else {
      return checkAns(array);
    }
  };
  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < 4; i++) {
      const number = parseInt(Math.random() * 100);
      newArray.push(number);
    }
    setAnswer(checkAns(newArray));
    setNumbers(newArray);
  }, [replay]);
  const handleSelect = (number) => {
    setSelected(true);
    if (initialAmount < 30) {
      document.getElementById("my_modal_2").showModal();
      return;
    }
    if (number === answer) {
      setInitialAmount(initialAmount + number);
    } else {
      setInitialAmount(initialAmount - 30);
      setWrong(true);
    }
  };
  return (
    <div>
      {play ? (
        <>
          <div>
            <div className="flex justify-end">
              <div>
                <div className="border w-32 animate-bounce h-32 flex rounded-full items-center justify-center">
                  {initialAmount} টাকা আছে
                </div>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className="btn btn-secondary w-32"
                >
                  টাকা উঠান
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box text-secondary">
                    <h3 className="font-bold text-lg mb-10">
                      {" "}
                      উঠাতে পারবেন না!
                    </h3>
                    <Image
                      className=""
                      src={"/images/sad.svg"}
                      height={400}
                      width={400}
                      alt="we"
                    />

                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">আচ্ছা</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
            {selected ? (
              <>
                <div className="uppercase">
                  {" "}
                  {wrong
                    ? "ওহো! হেরে গেলেন। ফের খেলুন 🤦‍♂️"
                    : `বাহ! আপনি ${answer} টাকা জিতে গেছেন. 🎉`}
                </div>
                <div className="grid grid-cols-2 gap-6 mt-5">
                  {numbers.map((number) => (
                    <div
                      className={`p-5 text-center rounded-lg cursor-not-allowed hover:shadow-lg hover:border-black shadow-black ${
                        selected && answer == number
                          ? "bg-primary"
                          : "bg-red-600"
                      } ${selected ? "" : "bg-pink-600 text-pink-600"}`}
                      key={number}
                    >
                      {number}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <button
                    onClick={() => {
                      setReplay(!replay);
                      setSelected(false);
                      setWrong(false);
                    }}
                    className="btn btn-warning text-center mt-5 animate-pulse px-20"
                  >
                    ফের খেলুন
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="my-5">যেকোনো একটা বক্সে চাপ মারেন। </div>
                <div className="grid grid-cols-2 gap-6">
                  {numbers.map((number) => (
                    <div
                      className={`border p-5 text-center rounded-lg cursor-pointer hover:shadow-lg hover:border-black shadow-black ${
                        selected && answer == number
                          ? "bg-primary"
                          : "bg-red-600"
                      } ${selected ? "" : "bg-pink-600 text-pink-600"}`}
                      key={number}
                      onClick={() => handleSelect(number)}
                    >
                      {number}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl mb-3"> খেলার নিয়মঃ </h1>
          <div className="lg:grid lg:grid-cols-3 gap-10">
            <div className="rounded-lg p-2 bg-pink-600 shadow-lg shadow-black mb-5">
              ৪ টা অপশন এর মধ্যে ১ টা সিলেক্ট করতে হবে।
            </div>
            <div className="rounded-lg p-2 bg-pink-600 shadow-lg shadow-black mb-5">
              প্রতিটা ভুল উত্তরের জন্য 30 টাকা দিতে হবে।
            </div>
            <div className="rounded-lg p-2 bg-pink-600 shadow-lg shadow-black mb-5">
              প্রতিটা সঠিক উত্তরের জন্য পাবেন উত্তরের সমপরিমাণ টাকা।
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={() => setPlay(true)}
              className="btn btn-warning text-center"
            >
              খেলতে চাইলে চাপ দিন
            </button>
          </div>
        </>
      )}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box text-secondary">
          <h3 className="font-bold text-lg mb-10"> টাকা নাই আর!</h3>
          <Image
            className=""
            src={"/images/sad.svg"}
            height={400}
            width={400}
            alt="we"
          />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">আচ্ছা</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
