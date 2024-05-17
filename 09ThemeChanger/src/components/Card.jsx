import { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";

export default function Card() {
  const { theme } = useContext(ThemeContext);
  const { data } = useContext(DataContext);
  let style = {};
  if (theme === "dark") {
    style = {
      backgroundColor: "#202020",
      fontFamily: "inherit",
      fontSize: "15px",
      color: "white",
      height: "300px",
      width: "250px",
      borderRadius: "6%",
      padding: "10px",
      border: "solid 1px #202020",
    };
  } else {
    style = {
      backgroundColor: "white",
      fontFamily: "inherit",
      fontSize: "15px",
      color: "#202020",
      height: "300px",
      width: "250px",
      borderRadius: "6%",
      padding: "10px",
      border: "solid 1px #202020",
    };
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={style}>
          <Button /> <br />
          Name: {data.name} <br />
          Age: {data.age} <br />
          DOB: {data.dob} <br />
          College: {data.college} <br />
          Address: {data.address} <br />
        </div>
      </div>
    </>
  );
}
