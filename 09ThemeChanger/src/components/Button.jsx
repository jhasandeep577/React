import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Button() {
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <>
      <button
        style={{
          backgroundColor: "brown",
          color: "white",
          margin: "5px",
          padding: "5px",
          border: "solid 1px brown",
          borderRadius: "100%",
          height: "30px",
          width: "30px",
        }}
        onClick={(e) => setTheme(theme === "light" ? "dark" : "light")}
      >
        :)
      </button>
    </>
  );
}
