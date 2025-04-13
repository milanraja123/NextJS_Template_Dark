import React from "react";
import { cva } from "class-variance-authority";

type Props = {
  variant: "primary" | "secondary";
  size?: "sm";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white text-white bg-transparent",
    },
    size: {
      sm: "h-10",
    },
  },
});

const Button: React.FC<Props> = (props) => {
  const { variant, className,size,...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
};

export default Button;
