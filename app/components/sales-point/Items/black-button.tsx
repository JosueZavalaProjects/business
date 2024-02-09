import { Icon } from "@/types/sales-point";
import Image from "next/image";

type BlackButtonProps = {
  icon: Icon;
  setItems: () => void;
};

export const BlackButton = ({ icon, setItems }: BlackButtonProps) => (
  <div
    className="grid justify-items-center items-center bg-black text-white rounded-lg w-8 h-8 cursor-pointer"
    onClick={() => setItems()}
  >
    <Image src={icon.src} width={20} height={5} alt={icon.alt} />
  </div>
);
