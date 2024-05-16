import Text from "./components/textField";
import Btn from "./components/CustomButton";
import { useCallback, useState, useEffect, useRef } from "react";
function App() {
  // useCallback is a hook that let's you cache a function definition between rerenders for optimization.
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("jdygshs8");
  const copyPassword = useRef(null);
  // const passwordGenerator = useCallback(() => {
  //   let pass = "";
  //   let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
  //   if (numAllowed) str += "0123456789";
  //   if (charAllowed) str += "!@#$%^&*";

  //   for (let i = 1; i <= length; i++) {
  //     let char = Math.floor(Math.random() * str.length + 1);
  //     pass += str.charAt(char);
  //   }

  //   setPassword(pass);
  // }, [numAllowed, charAllowed, length, setPassword]);

  const passwordGenerator = () => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#787878",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Text
            type="text"
            label="Password"
            placeholder="Password"
            value={Password}
            readonly="true"
            ref={copyPassword}
          />
          <Btn
            name="Copy"
            func={() => {
              copyPassword.current?.select();
              window.navigator.clipboard.writeText(Password);
            }}
          />
        </div>
        <div>
          <Text
            type="range"
            name="length"
            id="length"
            min={5}
            max={20}
            value={length}
            funct={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length({length})</label>
          <Text
            type="checkbox"
            name="numbers"
            id="numbers"
            funct={() => setNumAllowed((prev) => !prev)}
          />
          <label htmlFor="numbers">Numbers</label>
          <Text
            type="checkbox"
            name="charcters"
            id="chracters"
            funct={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="chracters">Chracters</label>
        </div>
      </div>
    </>
  );
}

export default App;
