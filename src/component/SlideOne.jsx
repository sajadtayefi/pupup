import Next from "./NextArrow";
import NextBtn from "./NextBtn";

export default function SlideOne(props) {
  return (
    <div className="flex justify-center items-center z-30 m-5">
      <div className=" w-full flex flex-row z-30 overflow-visible    ">
        <div className=" bg-white w-1/2 rounded-md justify-center items-start flex flex-col ">
          <div className=" ml-20 mt-48 mb-10 justify-center flex flex-col ">
            <h3 className=" my-5 text-2xl font-bold">Editing made easy</h3>
            <p className=" font-medium">Get detail feedback on your</p>
            <p className=" font-medium">wrting and apply suggestions</p>
            <p className=" font-medium">with just one click</p>
          </div>
          <div className="">
            <NextBtn />
          </div>
        </div>
        <div className=" flex flex-col justify-center relative   items-end bg-svgPic bg-cover bg-svgOne  rounded-md w-2/3 ">
          <Next />
        </div>
      </div>
    </div>
  );
}
