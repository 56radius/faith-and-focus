import React from "react";
import clsx from "clsx";

export const Badge = ({ children, className }) => {
  return (
    <span className={clsx("inline-block text-sm font-medium px-3 py-1 rounded-full", className)}>
      {children}
    </span>
  );
};
