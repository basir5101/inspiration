import Carousel from "@/components/Carousel";
import Facebook from "@/components/Facebook";
import Wait from "@/components/Wait";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="px-14">
        <Facebook />
        <Wait />
      </div>
    </>
  );
}
