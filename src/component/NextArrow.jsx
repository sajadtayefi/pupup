import { React } from "react";
import { GrLinkNext } from "react-icons/gr";
import { useSwiper } from "swiper/react";

export default function Next() {
  const nexthandler = () => {
    swiper.slideNext()
  };
  const swiper = useSwiper();
  return (
    <div
      onClick={nexthandler}
      className=" cursor-pointer some -right-5 absolute shadow-md  bg-white w-10 h-10 rounded-full flex justify-center items-center"
    >
      <GrLinkNext />
    </div>
  );
}
