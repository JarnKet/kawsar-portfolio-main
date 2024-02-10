import React from "react";

const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="bg-componentBg rounded-md border border-primary outline-none p-4 w-[200px] hover:scale-[0.9] transition-all duration-300 ease-in-out"
    >
      {children}
    </button>
  );
};

export default Button;
