import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import BackArrow from "./BackArrow";

export default function SlideFour(props) {
  const showhandler = () => {
    props.setShow(true);
  };
  return (
    <div className="flex justify-center items-center z-30 m-5">
      <div className=" w-full flex flex-row z-30 overflow-visible    ">
        <div className=" bg-white w-1/2 rounded-md justify-center items-start flex flex-col ">
          <BackArrow />

          <div className=" ml-20 mt-48 mb-10 justify-center flex flex-col ">
            <h3 className=" my-5 text-2xl font-bold">Editing made easy</h3>
            <p className=" font-medium">Get detail feedback on your</p>
            <p className=" font-medium">wrting and apply suggestions</p>
            <p className=" font-medium">with just one click</p>
          </div>
          <div className="">
            <button
              onClick={showhandler}
              className=" rounded-md m-20 hover:bg-green-600 bg-green-400 w-20 h-10 text-white"
            >
              NEXT
            </button>
          </div>
        </div>
        <div className=" flex flex-col justify-center relative   items-end  rounded-md w-2/3 bg-svgFour">
          <div
            onClick={showhandler}
            className=" cursor-pointer some -right-5 absolute shadow-md  bg-white w-10 h-10 rounded-full flex justify-center items-center"
          >
            <GrLinkNext />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
