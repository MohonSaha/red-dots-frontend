import React, { useState, useRef, MouseEvent } from "react";
import "./ButtonRing.css";

// Define the type for the ripple style state
interface RippleStyle {
  top: string;
  left: string;
  width: string;
  height: string;
}

interface ButtonRingProps {
  children: React.ReactNode;
}

const ButtonRing: React.FC<ButtonRingProps> = ({ children }) => {
  const [rippleStyle, setRippleStyle] = useState<RippleStyle | {}>({});
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();

      // Get the position of the click
      const size = Math.max(button.clientWidth, button.clientHeight);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      setRippleStyle({
        top: `${y}px`,
        left: `${x}px`,
        width: `${size}px`,
        height: `${size}px`,
      });

      // Remove ripple after animation completes
      setTimeout(() => setRippleStyle({}), 600); // Match the duration of the animation
    }
  };

  return (
    <button
      ref={buttonRef}
      className="button-ring relative inline-flex overflow-hidden rounded-md p-[2px] focus:outline-none"
      onClick={createRipple}
    >
      <span className="button-content inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md dark:bg-[#e97e7e] bg-[#ffffff] px-4 py-1 text-sm font-medium text-black backdrop-blur-3xl border-black border-2">
        {children}
      </span>
      {rippleStyle && Object.keys(rippleStyle).length > 0 ? (
        <span
          className="ripple"
          style={rippleStyle as React.CSSProperties}
        ></span>
      ) : null}
    </button>
  );
};

export default ButtonRing;
