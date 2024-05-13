function CustButton({ color, colName, state }) {
  //  Object destructuring
  const changeColor = () => {
    state(color);
  };
  return (
    <>
      <button
        style={{
          gap: "10px",
          backgroundColor: color,
          color: "white",
          height: "50px",
          width: "100px",
          border: "solid 1px white",
          borderRadius: "7%",
        }}
        onClick={changeColor}
      >
        {colName}
      </button>
    </>
  );
}
export default CustButton;
