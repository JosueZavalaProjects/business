import cn from "classnames";

import { backgroundColors } from "@/constants/common";
import { BgColor } from "@/types/UI/common";

type ButtonProps = {
  onClick?: () => void;
  bgColor?: BgColor;
  className?: string;
  children: React.ReactNode;
};
export const Button = ({
  onClick = () => {},
  bgColor = "main-blue",
  className,
  children,
}: ButtonProps) => {
  const classes = cn(
    className,
    backgroundColors[bgColor]
    /* sizes[size],
    fontWeight[weight] */
  );
  return (
    <button
      onClick={() => onClick()}
      className={`border rounded-xl py-2 px-6 bg-gray-400 text-white ${classes}`}
    >
      <span className="flex items-center justify-center">{children}</span>
    </button>
  );
};
