import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({children, type}: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 p-2 mt-4 rounded text-white w-full md:w-auto md:px-10 focus:bg-blue-600 active:bg-blue-800 active:scale-95"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
