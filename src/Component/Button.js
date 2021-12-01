import React from "react";

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: color }} class="btn">
        {text}
      </button>
    </div>
  );
};

export default Button;
