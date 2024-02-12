import { useState } from "react";

import Modal from "@/app/components/UI/modal";

import useSalesPointState from "../../../states/sales-point-state";
import { PaymentAmount } from "./payment-amount";
import { PaymentMethod } from "./payment-method";

type ModalProps = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export const Modals = ({ show, setShow }: ModalProps) => {
  const { paymentStep } = useSalesPointState();
  return (
    <Modal show={show} onClose={() => setShow(false)}>
      {paymentStep === 1 && <PaymentMethod />}
      {paymentStep === 2 && <PaymentAmount />}
    </Modal>
  );
};
