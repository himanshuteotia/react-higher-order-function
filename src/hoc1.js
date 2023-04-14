import { useState } from "react";

const HOC1 = ({ children }) => {
  const [color, setColor] = useState("red");
  return (
    <div>
      <button
        onClick={() => {
          color === "red" ? setColor("green") : setColor("red");
        }}
      >
        Change Color
      </button>
      <div style={{ color: color }}>{children}</div>
    </div>
  );
};

export default HOC1;
