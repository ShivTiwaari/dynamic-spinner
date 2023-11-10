import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wheel from "./Wheel";
let attempt = 1;
let initialArr = [];
for (let i = 1; i <= 50; i++) {
  initialArr.push(i);
}
export default function Spinner({ sendElement }) {
  const [arr, setArr] = useState(initialArr);
  const [degree, setDegree] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [transition, setTransition] = useState("all 5s ease-out");
  const resetArr = (selectedElement) => {
    let newArr = arr.filter((i) => i != selectedElement);
    setArr(newArr);
    sendElement(selectedElement);
  };
  const handleSpin = () => {
    setIsDisabled(true);
    setDegree(0);
    let random = Math.floor(Math.random() * arr.length);
    let selectedElement = arr[random];
    console.log("=> " + arr[random]);
    let delta = (random + 1) * (360 / arr.length);
    setDegree((prev) => prev + 1800 * attempt - delta);
    attempt++;
    setTimeout(() => {
      setTransition("none");
    }, 5000);
    setTimeout(() => {
      setTransition("all 5s ease-out");
    }, 6000);
    setTimeout(() => {
      resetArr(selectedElement);
      toast.info("  " + selectedElement + "  is selected !", {
        theme: "dark",
      });
      setDegree((prev) => prev + delta);
      setTransition(true);
    }, 5500);
    setTimeout(() => {
      setIsDisabled(false);
    }, 5500);
  };
  return (
    <div>
      <div className="toast">
        <ToastContainer position="top-center" autoClose={2500} theme="dark" />
      </div>
      <div className="pointer"></div>
      <div className="spinnerParentDiv">
        <div className="center"></div>
        <button
          className="spinButton"
          disabled={isDisabled}
          onClick={handleSpin}
        >
          Spin
        </button>
        <div
          className="spinner"
          style={{
            transform: `rotate(${degree}deg)`,
            transition: transition,
          }}
        >
          <Wheel array={arr} />
        </div>
      </div>
    </div>
  );
}
