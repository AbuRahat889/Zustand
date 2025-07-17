import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group ${className}`}
    >
      <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#3b9df8] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
      <span className="absolute inset-0 w-full h-full dark:bg-slate-800 bg-white rounded-br-md "></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#3b9df8] rounded-md opacity-0 group-hover:opacity-100 "></span>
      <span className="relative text-[#3b9df8] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white cursor-pointer">
        {children}
      </span>
    </button>
  );
};

export default Button;
