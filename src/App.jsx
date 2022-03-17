import React from "react";
import { SketchPicker } from "react-color";

const App = () => {
  const [bg, setBg] = React.useState("#ffffff");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: bg,
      }}
    >
      <div
        className="middle-div"
        style={{
          width: "70%",
          height: "70%",
          backgroundColor: "#242B2E",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          letterSpacing: "3px",
          textAlign: "center",
        }}
      >
        <h1>React BG Changer!</h1>
        <h2>Current Background Color Code: </h2>
        <h1 style={{ fontSize: "3rem" }}>{bg}</h1>
        <h3>Choose Another Color To Change Background</h3>
        <SketchPicker
          color={bg}
          onChangeComplete={(color) => {
            setBg(color.hex);
          }}
        />
      </div>
    </div>
  );
};

export default App;
