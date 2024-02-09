import { ContainerCard } from "../../UI/container-card";
import { FooterButton } from "./footer-button";
import { FOOTER_ICONS } from "@/constants/common";

export const Footer = () => {
  return (
    <ContainerCard>
      <div className="grid grid-cols-5 justify-items-center p-1 w-full">
        {FOOTER_ICONS.map((icon, index) => (
          <FooterButton
            key={`footer_button_${index}`}
            icon={{ ...icon, width: 45, height: 45 }}
          />
        ))}
      </div>
    </ContainerCard>
  );
};
