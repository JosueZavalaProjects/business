"use client";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/types/sales-point";

type FooterButtonProps = {
  icon: Icon;
  handleOnClick?: () => void;
};

export const FooterButton = ({ icon, handleOnClick }: FooterButtonProps) => {
  return (
    <Link href={icon.link || ""}>
      <div
        className="grid justify-items-center cursor-pointer items-center w-[40px] h-[40px]"
        onClick={() => (handleOnClick ? handleOnClick() : {})}
      >
        <Image
          src={icon.src}
          width={icon.width}
          height={icon.height}
          alt={icon.alt}
        />
      </div>
    </Link>
  );
};
