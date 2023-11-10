import { useState } from "react";
import Bucket from "./Bucket";
import "./index.css";
import Spinner from "./Spinner";

function App() {
  const [removedElements, setRemoveElements] = useState([]);
  const sendElement = (element) => {
    setRemoveElements([element, ...removedElements]);
    console.log("element sent => ", element);
  };
  return (
    <div className="bodyDiv">
      <Spinner sendElement={sendElement} />
      <Bucket removedElements={removedElements} />
    </div>
  );
}

export default App;
