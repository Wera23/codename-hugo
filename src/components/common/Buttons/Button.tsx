import React, { ButtonHTMLAttributes } from "react";
import classnames from "classnames";

import "./Button.scss";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={classnames("btn", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
