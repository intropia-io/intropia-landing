import React, { ButtonHTMLAttributes, useMemo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
