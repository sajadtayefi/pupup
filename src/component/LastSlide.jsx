import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function LastSlide(props) {
  const showhandler = () => {
    props.setShow(false);
  };
  return (
    <div className="flex justify-center items-center">
      <div className=" relative bg-svgLast text-white w-2/5 h-full flex items-center justify-center flex-col ">
        <div
          onClick={showhandler}
          className="  -left-5 cursor-pointer absolute shadow-md  bg-white w-10 h-10 rounded-full flex justify-center items-center"
        >
          <GrLinkPrevious />
        </div>
        <h1 className="mt-40 font-bold ">Enjoy</h1>
        <h1 className=" m-2 mb-8 font-bold ">the Grammarly Editor</h1>
        <p>You're ready to start writing you can</p>
        <p>also copy and paste or upload some</p>
        <p>existing text to the Grammarly Editor</p>
        <Link to="/somewhere">
          <button className=" m-28 h-10 shadow-md hover:bg-green-700 w-40 bg-green-500 rounded-md">
            START WRITING
          </button>
        </Link>
      </div>
    </div>
  );
}
