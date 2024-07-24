import React from "react";
import Image from "next/image";
export default function Heading({ title = "Heading", className = "" }) {
  return (
    <div className="relative">
      <Image
        className="object-cover -bottom-10 absolute blur-sm"
        src={"/images/heading.svg"}
        height={50}
        width={400}
        alt="title"
      />
      <div
        className={`text-3xl lg:text-5xl  font-serif  font-bold ${
          className ? className : "text-primary"
        }`}
      >
        {title}
      </div>
    </div>
  );
}
