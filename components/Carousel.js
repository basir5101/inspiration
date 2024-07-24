import React from "react";
import Image from "next/image";
export default function Carousel() {
  const items = [
    {
      img: "/images/slide-1.svg",
      title: "Do You Love Me, Baib?",
    },
    {
      img: "/images/slide-2.svg",
      title: "Will You Marry Me, Baib?",
    },
    {
      img: "/images/slide-1.svg",
      title: "Can I be your husband, Baib?",
    },
  ];
  return (
    <>
      <div className="min-w-full carousel shadow-lg rounded-none">
        {items.map((item, i) => (
          <div key={i} className="carousel-item relative w-full">
            <Image
              width={1080}
              height={740}
              src={item.img}
              className="object-cover min-w-full min-h-screen"
              alt="Tailwind CSS Carousel component"
            />
            <div className="absolute top-10 right-10 text-right text-5xl lg:text-9xl font-bold text-primary">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
