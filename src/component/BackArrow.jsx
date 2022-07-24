import { React } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { useSwiper } from "swiper/react";

export default function BackArrow() {
  const nexthandler = () => {
    swiper.slidePrev();
  };
  const swiper = useSwiper();
  return (
    <div
      onClick={nexthandler}
      className=" cursor-pointer left-0 absolute shadow-md  bg-white w-10 h-10 rounded-full flex justify-center items-center"
    >
      <GrLinkPrevious />
    </div>
  );
}
