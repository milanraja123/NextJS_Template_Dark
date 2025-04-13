import React from "react";
import { LuMousePointer } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

type Props = {
  name: string;
  color?: "red" | "blue";
};

const Pointer: React.FC<Props> = (props) => {
  const { name, color } = props;
  return (
    <div className="relative">
      <LuMousePointer color="#fff" size={22} />

      <div className="absolute top-full left-full">
        <div
          className={twMerge(
            "inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none",
            color === "red" && "bg-red-500"
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default Pointer;
