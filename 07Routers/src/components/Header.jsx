import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div
        style={{
          backgroundColor: "orange",
          fontFamily: "unset",
          margin: "0px",
          padding: "0px",
        }}
      >
        <Link
          to="/Home"
          style={{
            margin: "0px 20px 0px 20px",
            textDecoration: "none",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Home
        </Link>

        <Link
          to="/Contact"
          style={{
            margin: "0px 20px 0px 20px",
            padding: "2px",
            textDecoration: "none",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Contact us
        </Link>

        <Link
          to="/About"
          style={{
            margin: "0px 20px 0px 20px",
            padding: "2px",
            textDecoration: "none",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          About us
        </Link>
      </div>
    </>
  );
}
