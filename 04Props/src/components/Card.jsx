import React from "react";
function Card(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "200px",
            width: "150px",
            backgroundColor: "white",
            marginBottom: "10px",
            color: "black",
            display: "flex",
            overflow: "-moz-hidden-unscrollable",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "auto",
              padding: "5px",
            }}
          >
            <h2>DETAILS</h2>
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {props.username}
            </p>
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {props.email}
            </p>
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {props.dob}
            </p>
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {props.mobile}
            </p>
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {props.address}
            </p>
          </div>
        </div>
        <div
          style={{
            height: "200px",
            width: "350px",
            justifyContent: "center",
            backgroundColor: "#284583",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2>QUOTE</h2>
          <p
            style={{
              textAlign: "center",
              margin: "0px",
              padding: "5px",
              color: "white",
            }}
          >
            {props.details}
          </p>
        </div>
      </div>
    </>
  );
}
export default Card;
