import React from "react";
import Heading from "./Heading";
import Image from "next/image";

export default function Marry() {
  return (
    <div>
      <Heading title="We are going to be one. 😶" />
      <div className="grid grid-cols-1  gap-5 mt-10">
        <div className="font-semibold relative text-center border-secondary border shadow-lg ">
          <div className="py-10 px-10">26 July 2024</div>
          <Image
            className="absolute -top-6 -right-6"
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
        </div>
      </div>
    </div>
  );
}
