import React from "react";
import Heading from "./Heading";
import Image from "next/image";

export default function Hand() {
  return (
    <div className="relative">
      <Image
        src={"/images/hand.jpg"}
        className="object-cover blur-sm min-h-screen w-full brightness-50"
        height={500}
        width={400}
        alt="we"
      />
      <div className="absolute  top-10 pl-10 pt-3">
        <Heading className="text-secondary" title="Was I Innocent That Day?" />
      </div>
      <div className="text-right absolute right-5 bottom-10">
        <p className="text-3xl text-white">
          {" "}
          I met you empty handed and ugly looking.{" "}
        </p>
        <p className="text-4xl text-secondary font-semibold mt-3 font-mono">
          {" "}
          But you liked me ❤{" "}
        </p>
      </div>
    </div>
  );
}
