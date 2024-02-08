import { Icon } from "@/types/sales-point";
import Image from "next/image";

type FooterButtonProps = {
  icon: Icon;
};

export const FooterButton = ({ icon }: FooterButtonProps) => {
  return (
    <div className="grid justify-items-center items-center w-[40px] h-[40px]">
      <Image
        src={icon.src}
        width={icon.width}
        height={icon.height}
        alt={icon.alt}
      />
    </div>
  );
};
