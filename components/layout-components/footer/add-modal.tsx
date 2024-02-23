import Link from "next/link";

import { Button } from "@/components/UI/button";
import Modal from "@/components/UI/modal";
import Text from "@/components/UI/text";

type ModalProps = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export const AddModal = ({ show, setShow }: ModalProps) => {
  return (
    <Modal show={show} onClose={() => setShow(false)}>
      <div className="grid py-12">
        <div className="grid gap-4 justify-items-center">
          <Text size="2xl" color="gray">
            ¿Qué Necesitas Agregar?
          </Text>
          <Link href={"#"} className="cursor-pointer">
            <Button onClick={() => setShow(false)}>Ventas</Button>
          </Link>
          <Link href={"/inventory"}>
            <Button onClick={() => setShow(false)}>Inventarios</Button>
          </Link>
          <Link href={"#"}>
            <Button onClick={() => setShow(false)}>Gastos</Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};
