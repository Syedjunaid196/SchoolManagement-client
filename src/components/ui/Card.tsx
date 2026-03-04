import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "w-full max-w-md rounded-2xl bg-white p-8 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};
