import { useEffect, useState } from "react";

import Modal from "@/components/UI/modal";

import { AskConfirmation } from "./ask-confirmation";
import { Confirmation } from "./confirmation";

/* import useSalesPointState from "../../../states/sales-point-state";
import { Change } from "./change";
import { PaymentAmount } from "./payment-amount";
import { PaymentMethod } from "./payment-method"; */

type ModalProps = {
  show: boolean;
  modalStep: number;
  setShow: (show: boolean) => void;
  setInventoryStep: (newStep: number) => void;
  handleAddProduct: () => void;
  setModalStep: (newStep: number) => void;
};

export const Modals = ({
  show,
  modalStep,
  setShow,
  setInventoryStep,
  handleAddProduct,
  setModalStep,
}: ModalProps) => {
  const handleSetInventoryStep = (inventoryStep: number) => {
    setShow(false);
    setInventoryStep(inventoryStep);
  };

  useEffect(() => {
    if (!show) setModalStep(1);
  }, [show]);
  return (
    <Modal show={show} onClose={() => setShow(false)}>
      test
      {modalStep === 1 && (
        <AskConfirmation
          setInventoryStep={handleSetInventoryStep}
          handleAddProduct={handleAddProduct}
        />
      )}
      {modalStep === 2 && (
        <Confirmation
          setModalStep={setModalStep}
          setInventoryStep={handleSetInventoryStep}
        />
      )}
      {/* 
      {paymentStep === 2 && <PaymentAmount />}
      {paymentStep === 3 && <Change setShow={setShow} />} */}
    </Modal>
  );
};
