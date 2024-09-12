import React from "react";

const ButtonRing = ({ children }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-md p-[2px] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-gray-5">
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md dark:bg-[#e97e7e] bg-[#ffffff] px-4 py-1 text-sm font-medium  text-black backdrop-blur-3xl border-black border-2">
        {children}
      </span>
    </button>
  );
};

export default ButtonRing;
