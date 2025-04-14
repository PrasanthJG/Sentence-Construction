// import * as React from 'react';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
//   variant?: 'default' | 'outline' | 'ghost';
// }

// export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
//   return (
//     <button
//       className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ variant = "default", className, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className ?? ""}`}
      {...props}
    />
  );
};
