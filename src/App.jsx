import { useState } from "react";
import Modal from "./component/Modal"


function App() {
  const [show, setShow] = useState(false);

  return (
    <div className=" w-screen h-screen bg-background bg-contain bg- flex flex-col justify-center items-center">
      <button onClick={() => setShow(true)} className=" bg-slate-800 w-40 h-10 rounded-lg text-white border font-sans
     border-white  ">
        click me...!
      </button>
      {show ? <Modal /> : null}
    </div>
  );
}

export default App;
