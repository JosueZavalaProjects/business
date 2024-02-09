import { Icon } from "@/types/sales-point";
import Image from "next/image";
import Link from "next/link";

type FooterButtonProps = {
  icon: Icon;
};

export const FooterButton = ({ icon }: FooterButtonProps) => {
  return (
    <Link href={icon.link || ""}>
      <div className="grid justify-items-center cursor-pointer items-center w-[40px] h-[40px]">
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
