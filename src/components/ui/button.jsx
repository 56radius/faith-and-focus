import React from "react";
import clsx from "clsx";

export const Button = ({ children, className, variant = "solid", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md focus:outline-none";
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:border-blue-400",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
