import React, { FC, JSX } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export const PrimaryButton: FC<Props> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <button
      className={`${className} bg-green-600 rounded-md px-4 py-2 cursor-pointer`}
    >
      {children}
    </button>
  );
};
