import Carousel from "@/components/Carousel";
import Facebook from "@/components/Facebook";
import Hand from "@/components/Hand";
import Heading from "@/components/Heading";
import Marry from "@/components/Marry";
import Meet from "@/components/Meet";
import OrderNow from "@/components/OrderNow";
import Promise from "@/components/Promise";
import Remembared from "@/components/Remembared";
import Wait from "@/components/Wait";

export default function Home() {
  return (
    <>
      <Carousel />
      {/* <OrderNow /> */}
      <Remembared />
      <Facebook />
      <div className="px-10">
        <Wait />
      </div>
      <Meet />
      <Hand />
      <Promise />
      {/* <div className="px-10 py-14">
        <Marry />
      </div> */}
    </>
  );
}
