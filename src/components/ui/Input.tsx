import React from "react";
import clsx from "clsx";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = ({ error, className, ...props }: InputProps) => {
  return (
    <div className="space-y-1">
      <input
        {...props}
        className={clsx(
          "w-full rounded-lg border px-4 py-2 transition focus:ring-2 focus:ring-indigo-500 outline-none",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
