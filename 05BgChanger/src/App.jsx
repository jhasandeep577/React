import { useState } from "react";
import CustButton from "./components/Custbutton";

function App() {
  const [col, setCol] = useState("#202020");
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: col,
          height: "665px",
        }}
      >
        <CustButton colName="Red" color="#b31e1e" state={setCol} />
        <CustButton colName="Green" color="#36b31e" state={setCol} />
        <CustButton colName="Blue" color="#1e7cb3" state={setCol} />
        <CustButton colName="Yellow" color="#b3981e" state={setCol} />
        <CustButton colName="Orange" color="#e96106" state={setCol} />
        <CustButton colName="Violet" color="#7c22d1" state={setCol} />
        <CustButton colName="Pink" color="#cb22d1" state={setCol} />
      </div>
    </>
  );
}
export default App;
