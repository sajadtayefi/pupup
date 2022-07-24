import { Link } from "react-router-dom";

export default function SomeWhere() {
  return (
    <div className=" flex flex-col justify-center items-center w-screen  bg-contain h-screen bg-background    ">
      <Link to="../">
        <button
          className=" bg-slate-800 w-60 h-20 rounded-lg text-white border font-sans
     border-white  "
        >
         Back home?
        </button>
      </Link>
    </div>
  );
}
