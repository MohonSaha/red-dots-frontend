// components/MyButton.tsx

import React, { useState, ButtonHTMLAttributes } from "react";
import styles from "./MyButton.module.css";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  hoverColor?: string;
  borderColor?: string;
  textColor?: string;
  backgroundColor?: string;
  className?: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  children,
  hoverColor = "#1976d2",
  borderColor = "#eb2c29",
  textColor = "#eb2c29",
  backgroundColor = "transparent",
  onClick,
  className,
  ...props
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (loading) return; // Prevent multiple clicks
    setLoading(true);
    try {
      if (onClick) {
        // Support both synchronous and asynchronous onClick handlers
        const result: any = onClick(event);
        if (result instanceof Promise) {
          await result;
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`${styles.button} ${className || ""}`}
      style={
        {
          "--hover-color": hoverColor,
          "--border-color": borderColor,
          "--text-color": textColor,
          "--background-color": backgroundColor,
        } as React.CSSProperties
      }
      onClick={handleClick}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <div className={styles.spinner} /> : children}
    </button>
  );
};

export default MyButton;
