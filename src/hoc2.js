import { useState } from "react";

const HOC2 = ({ children }) => {
  const [color, setColor] = useState("blue");
  return (
    <div>
      <button
        onClick={() => {
          color === "blue" ? setColor("brown") : setColor("blue");
        }}
      >
        Change Color
      </button>
      <div style={{ color: color }}>{children}</div>
    </div>
  );
};

export default HOC2;
