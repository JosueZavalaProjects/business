import { useEffect, useState } from "react";

import Image from "next/image";

import { Button } from "@/components/UI/button";
import { ContainerCard } from "@/components/UI/container-card";
import { Input } from "@/components/UI/input";
import SearchInput from "@/components/UI/search-input";
import Text from "@/components/UI/text";
import { BackArrow } from "@/public/assets";
import { Modals } from "../../modals";

type ProductInformationProps = {
  setStep: (nextStep: number) => void;
};

/* type Product = {
  category: string;
  type: string;
  name: string;
  price: number;
}; */
export const ProductInformation = ({ setStep }: ProductInformationProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [productType, setProductType] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  /* const [product, setProduct] = useState<Product>(); */
  const [isValidForm, setIsValidForm] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  /* const handleSetProduct = (field: string) => {
    const newProduct = { ...product };
    newProduct[field] = 'some'
  }; */

  const handleSetInventoryStep = (newStep: number) => setStep(newStep);

  useEffect(() => {
    if (category && productType && productName && productPrice) {
      setIsValidForm(true);
      return;
    }
    setIsValidForm(false);
  }, [category, productType, productName, productPrice]);

  return (
    <section className="h-[41rem]">
      <Modals
        show={showModal}
        setShow={setShowModal}
        setInventoryStep={handleSetInventoryStep}
      />
      <div className="grid w-full gap-4 px-4 bg-main-blue rounded-b-lg">
        <div className="flex w-full justify-between bg-main-blue">
          <div className="w-[245px]">
            <Text color="white" size="xl">
              Agrega la informacion del producto o Servicio
            </Text>
          </div>
          <div className="grid justify-items-center items-center">
            {/* Here comes Notification bell icon */}
          </div>
        </div>
        <div className="flex gap-4 pb-28 static">
          <Image
            src={BackArrow}
            width={15}
            height={26}
            alt="back arrow"
            className="cursor-pointer"
            onClick={() => setStep(0)}
          />
        </div>
      </div>

      <div className="flex w-[340px] justify-center bg-white rounded-lg relative -top-24 -right-[10px]">
        <ContainerCard>
          <div className="flex flex-col gap-2 p-4">
            <div className="">
              <SearchInput value={searchInput} setValue={setSearchInput} />
            </div>
            <Input
              label="category"
              placeholder="Ropa"
              value={category}
              setValue={setCategory}
            />
            <Input
              label="tipo de producto"
              placeholder="Playera M"
              value={productType}
              setValue={setProductType}
            />
            <Input
              label="nombre de producto"
              placeholder="Playera de Barbie"
              value={productName}
              setValue={setProductName}
            />
            <Input
              label="precio de venta"
              placeholder="598 MXN"
              value={productPrice}
              setValue={setProductPrice}
            />
            <div className="flex justify-center pt-4">
              <Button
                className="!py-4 !px-8"
                onClick={() => setShowModal(true)}
                disabled={!isValidForm}
              >
                Agregar
              </Button>
            </div>
          </div>
        </ContainerCard>
      </div>
    </section>
  );
};
