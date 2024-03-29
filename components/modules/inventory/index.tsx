"use client";
import { useState } from "react";

import { addDoc, collection } from "firebase/firestore";

import { MOCK_PRODUCT, PRODUCT_KEYS } from "@/constants/inventory";
import { useAmount } from "@/hook/useAmount";
import { db } from "@/services/firebase";
import { Product, ProductKeys, Unit } from "@/types/inventory";

import { Modals } from "./components/modals";
import { ProductInformation } from "./components/steps/product-information";
import { SetUnits } from "./components/steps/set-units";

export const Inventory = (): React.ReactElement => {
  const [step, setStep] = useState<number>(1);
  const [unit, setUnit] = useState<Unit>("pzs");
  const [product, setProduct] = useState<Product>(MOCK_PRODUCT);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalStep, setModalStep] = useState<number>(1);

  const { amount, handleSetAmount, removeDecimalPart } = useAmount(unit);

  const handleSetProduct = (value: string | number, key: ProductKeys) => {
    if (key === PRODUCT_KEYS.PRICE) value = +value;
    if (typeof value === "string") value = value.toLowerCase();

    const newProduct = { ...product, [key]: value };

    setProduct(newProduct);
  };

  const handleSetInventoryStep = (newStep: number) => setStep(newStep);

  const handleAddProduct = async () => {
    try {
      await addProductToDB();
      setModalStep(2);
      setProduct(MOCK_PRODUCT);
    } catch (error) {
      console.log(error);
    }
  };

  const addProductToDB = async () => {
    const { name, category, price, type, unit } = product;
    await addDoc(collection(db, "products"), {
      name,
      category,
      price,
      subcateory: type,
      unit,
      inventory: amount,
    });
  };

  return (
    <>
      <Modals
        show={showModal}
        modalStep={modalStep}
        setShow={setShowModal}
        setInventoryStep={handleSetInventoryStep}
        handleAddProduct={handleAddProduct}
        setModalStep={setModalStep}
      />
      {step === 1 && (
        <SetUnits
          amount={amount}
          unit={unit}
          setStep={setStep}
          handleSetAmount={handleSetAmount}
          removeDecimalPart={removeDecimalPart}
          setUnit={setUnit}
        />
      )}
      {step === 2 && (
        <ProductInformation
          setStep={setStep}
          setShowModal={setShowModal}
          handleSetProduct={handleSetProduct}
          product={product}
        />
      )}
    </>
  );
};
