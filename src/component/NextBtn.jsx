import { React } from "react";
import { useSwiper } from "swiper/react";

export default function NextBtn() {
  const next = () => {
    swiper.slideNext()
  };
  const swiper = useSwiper();
  return (
    <button
    onClick={next}
    className=" rounded-md m-20 hover:bg-green-600 bg-green-400 w-20 h-10 text-white"
  >
    NEXT
  </button>
  );
}
