import cn from "classnames";

import { backgroundColors } from "@/constants/common";
import { BgColor } from "@/types/UI/common";

type ButtonProps = {
  onClick?: () => void;
  bgColor?: BgColor;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
};
export const Button = ({
  onClick = () => {},
  bgColor = "main-blue",
  className,
  children,
  disabled = false,
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
      className={`border rounded-xl py-2 px-6 text-white ${classes}
      ${
        disabled
          ? "bg-gray-200 border-gray-200 hover:text-gray-400 text-gray-400"
          : ""
      }
      `}
      disabled={disabled}
    >
      <span className="flex items-center justify-center">{children}</span>
    </button>
  );
};
