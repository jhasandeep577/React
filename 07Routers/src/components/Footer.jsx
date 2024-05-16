import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div
        style={{
          backgroundColor: "orange",
        }}
      >
        <marquee direction="left">
          <div
            style={{
              fontFamily: "monospace",
              padding: "0px",
              margin: "0px",
              fontSize: "20px",
            }}
          >
            Learing and practicing about React router from a youtube channel
            name Chai aur Code(Hitesh Chaudary)
          </div>
        </marquee>
      </div>
    </>
  );
}
