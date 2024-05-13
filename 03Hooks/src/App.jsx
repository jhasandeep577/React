import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);

  const addVal = () => {
    setCount(++count);
  };
  const subVal = () => {
    if (count > 0) setCount(--count);
  };
  return (
    <>
      <h2 style={{ textAlign: "center", color: "white" }}>Hooks</h2>
      <button
        onClick={addVal}
        style={{
          color: "white",
          backgroundColor: "#202020",
          border: "solid 1px #202020",
          height: "30px",
          width: "170px",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        Counter increase {count}
      </button>
      <button
        onClick={subVal}
        style={{
          color: "white",
          backgroundColor: "#202020",
          border: "solid 1px #202020",
          height: "30px",
          width: "170px",
          borderRadius: "10px",
        }}
      >
        Counter decrease {count}
      </button>
      <p style={{ backgroundColor: "white" }}>Count value : {count}</p>
      <h3 style={{ textAlign: "end", backgroundColor: "white" }}>
        Counter Value:{count}
      </h3>
      <h3 style={{ textAlign: "start", backgroundColor: "white" }}>
        Counter Value:{count}
      </h3>
      <h5 style={{ textAlign: "end", backgroundColor: "white" }}>
        Counter Value:{count}
      </h5>
      <h2 style={{ textAlign: "center", backgroundColor: "white" }}>
        Counter Value:{count}
      </h2>
    </>
  );
}
