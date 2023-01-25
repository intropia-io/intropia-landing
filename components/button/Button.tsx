import React, { ButtonHTMLAttributes, useMemo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const styles = useMemo(() => {
    return "px-5 py-3 text-base text-gray-900 font-semibold border-[rgba(0, 0, 0, 0.1)] border-solid border rounded-[12px] font-sans";
  }, []);

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
