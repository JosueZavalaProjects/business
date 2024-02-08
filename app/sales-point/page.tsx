"use client";
import { useState } from "react";

import { CATEGORIES_MOCK } from "@/constants/common";
import { Header } from "../components/Layout/header";
import { ContainerCard } from "../components/UI/container-card/page";
import { Footer } from "../components/UI/footer/page";
import { CategoryCard } from "../components/sales-point/categories/category-card";
import { AddItems } from "../components/sales-point/Items/add-items";

export default function SalesPointPage() {
  const [items, setItems] = useState<number>(1);
  return (
    <div className="grid">
      <Header />
      <div className="grid p-4 gap-4">
        {/* Categorias */}
        <ContainerCard>
          <div className="flex gap-4 p-6">
            {CATEGORIES_MOCK.map((category, index) => (
              <CategoryCard key={`CategoryCard_${index}`} name={category} />
            ))}
          </div>
        </ContainerCard>

        {/* Tabs */}
        <ContainerCard>
          <div className="flex gap-4 px-4 font-semibold">
            <div className="text-black cursor-pointer">Comanda</div>
            <div className="text-black cursor-pointer text-cadet-grey">
              Checkout
            </div>
          </div>
        </ContainerCard>

        {/* Productos */}
        <ContainerCard>
          <div className="flex flex-col gap-2 text-black p-2">
            <AddItems items={items} setItems={setItems} />
            <div className="">Search Button</div>
            <div className="flex flex-col">
              <div>Product 1</div>
              <div>Product 2</div>
              <div>Product 3</div>
              <div>Product 4</div>
            </div>
          </div>
        </ContainerCard>
      </div>
      <Footer />
    </div>
  );
}
