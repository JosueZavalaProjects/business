import React from "react";

import cn from "classnames";

import { colors, fontWeight, sizes } from "@/constants/common";
import { As, Color, FontWeight, Size } from "@/types/UI/common";

export interface TextProps {
  children: React.ReactNode;
  as?: As;
  className?: string;
  color?: Color;
  weight?: FontWeight;
  size?: Size;
}

const Text = React.forwardRef(function TextWithRef(
  {
    as = "span",
    className = "",
    color = "gray",
    weight = "normal",
    size = "base",
    children,
  }: TextProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const classes = cn(className, colors[color], sizes[size], fontWeight[weight]);

  return (
    <>
      {React.createElement(
        as,
        {
          ref,
          className: classes,
        },
        children
      )}
    </>
  );
});

export default Text;
