import Image from "next/image";
import React from "react";
import Heading from "./Heading";

export default function Remembared() {
  const dates = [
    {
      time: "15 Oct, 2022",
      msg: "We have met and spend a very good amount of time for the first time. It was the moment we were waiting for a long time.",
    },
    {
      time: "30 Apr, 2024",
      msg: "I am at your home to meet with your family. I was scared and also exited.I was feeling matured that day. 😛",
    },
    {
      time: "28 June, 2024",
      msg: "Your family members has come to visit my house. There expectation was not fill at all but the we were strong enough to make them agree.",
    },
    {
      time: "26 July, 2024",
      msg: "Our marries day has been scheduled.Dreams are coming true. We were waiting for this moment 🙊.",
    },
  ];
  return (
    <div className="py-14 bg-yellow-200 text-pink-600 p-5">
      <Heading title="Memorable Days... 📆 " />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        {dates.map((date, i) => (
          <div
            key={i}
            className="font-semibold border border-secondary relative  from mb-5 shadow-lg "
          >
            <div className="py-10 px-10">
              <div className="text-yellow-800 text-3xl mb-3 typing">
                {date.time}
              </div>
              <div className="text-lg">{date.msg}</div>
            </div>
            <Image
              className="absolute -top-6 -right-6 animate-pulse"
              height={70}
              width={70}
              src={"/images/heart.svg"}
              alt="heart"
            />
            <Image
              className="absolute -bottom-6 -left-6"
              height={70}
              width={70}
              src={"/images/heart.svg"}
              alt="heart"
            />
            <Image
              className="absolute -top-6 -left-6"
              height={70}
              width={70}
              src={"/images/heart.svg"}
              alt="heart"
            />
            <Image
              className="absolute -bottom-6 -right-6"
              height={70}
              width={70}
              src={"/images/heart.svg"}
              alt="heart"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
