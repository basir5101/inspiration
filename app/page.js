import Carousel from "@/components/Carousel";
import Facebook from "@/components/Facebook";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="px-14">
        <Facebook />
      </div>
    </>
  );
}