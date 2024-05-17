import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div
      style={{
        backgroundColor: "#202020",
        borderRadius: "5%",
        display: "inline-flex",
        flexDirection: "column",
        padding: "10px",
        margin: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          color: "yellow",
        }}
      >
        Profile
      </h2>
      <div>
        <p style={{ color: "white", fontFamily: "serif", fontSize: "20px" }}>
          {user == null
            ? ""
            : user.name == null
            ? "Login"
            : "Username : " + user.name}
        </p>
        <p style={{ color: "white", fontFamily: "serif", fontSize: "20px" }}>
          {user == null
            ? ""
            : user.password == null
            ? ""
            : "Password : " + user.password}
        </p>
      </div>
    </div>
  );
}
