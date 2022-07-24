import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideTree from "./SlideTree";
import SlideFour from "./SlideFour";
import LastSlide from "./LastSlide";

export default function Modal(props) {
  const [show, setShow] = useState(false);
  const closehandeler = (e) => {
    if (e.target.id === "Container") props.setShowModal(false);
  };
  return (
    <>
      <div
        onClick={closehandeler}
        id="Container"
        className=" fixed flex justify-center inset-0  items-center  bg-black bg-opacity-30 backdrop-blur-sm overflow-visible"
      >
        <div className="  w-8/12 h-2/3">
          {show ? (
            <LastSlide setShow={setShow} />
          ) : (
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={1}
              speed={0}
              draggable={false}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide>
                <SlideOne />
              </SwiperSlide>
              <SwiperSlide>
                <SlideTwo />
              </SwiperSlide>
              <SwiperSlide>
                <SlideTree />
              </SwiperSlide>
              <SwiperSlide>
                <SlideFour setShow={setShow} />
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
}
