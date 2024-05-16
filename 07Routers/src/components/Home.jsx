import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Home() {
  let [data, setData] = useState({});
  let { username } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((res) => setData(res));
    console.log(data);
  }, []);
  return (
    <>
      <div
        style={{
          fontFamily: "monospace",
          fontWeight: "bold",
          fontSize: "30px",
          color: "white",
          backgroundColor: "#202020",
          height: "633px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            backgroundColor: "white",
            padding: "10px",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontWeight: "bold",
              fontSize: "15px",
              color: "black",
              margin: "20px",
            }}
          >
            Username:{data.login} <br />
            Followers:{data.followers} <br />
            Following:{data.following}
          </p>
          <img src={data.avatar_url} alt="NotFound" height="100px" />
        </div>
      </div>
    </>
  );
}
