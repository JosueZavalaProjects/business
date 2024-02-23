"use client";
import { useState } from "react";

import { FOOTER_ICONS } from "@/constants/common";

import { ContainerCard } from "../../UI/container-card";
import { AddModal } from "./add-modal";
import { FooterButton } from "./footer-button";

export const Footer = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <ContainerCard>
      <div className="grid grid-cols-5 justify-items-center p-1 w-full">
        <AddModal show={showModal} setShow={setShowModal} />
        {FOOTER_ICONS.map((icon, index) => (
          <FooterButton
            key={`footer_button_${index}`}
            icon={{ ...icon, width: 45, height: 45 }}
            handleOnClick={icon.modal ? handleShowModal : () => {}}
          />
        ))}
      </div>
    </ContainerCard>
  );
};
