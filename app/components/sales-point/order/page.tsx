import { useState } from "react";
import { ContainerCard } from "../../UI/container-card/page";
import { CATEGORIES_MOCK } from "@/constants/common";
import { CategoryCard } from "../categories/category-card";
import { AddItems } from "../Items/add-items";
import SearchInput from "../../UI/search-input/page";
import { Product } from "../products/page";

export const Order = () => {
  const [items, setItems] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [indexCategorySelected, setIndexCategorySelected] =
    useState<number>(-1);

  return (
    <div className="grid p-4 gap-4">
      {/* Categorias */}
      <ContainerCard>
        <div className="flex gap-4 p-6">
          {CATEGORIES_MOCK.map((category, index) => (
            <CategoryCard
              name={category}
              index={index}
              setCategorySelected={setIndexCategorySelected}
              isSelected={indexCategorySelected === index}
              key={`CategoryCard_${index}`}
            />
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
          <div className="w-full">
            <SearchInput value={searchValue} setValue={setSearchValue} />
          </div>
          <div className="flex flex-col gap-1 py-2 max-h-60 overflow-y-scroll">
            <Product name="Llavero de animalitos" isSelected />
            <Product name="Llavero de Iglesia" />
            <Product name="Llavero de casa" />
            <Product name="Llavero de perrito" />
            <Product name="Llavero de gato" />
            <Product name="Llavero de refri" />
            <Product name="Llavero de casa" />
            <Product name="Llavero de perrito" />
            <Product name="Llavero de gato" />
            <Product name="Llavero de refri" />
            <Product name="Llavero de casa" />
            <Product name="Llavero de perrito" />
            <Product name="Llavero de gato" />
            <Product name="Llavero de refri" />
            <Product name="Llavero de casa" />
            <Product name="Llavero de perrito" />
            <Product name="Llavero de gato" />
            <Product name="Llavero de refri" />
          </div>
        </div>
      </ContainerCard>
    </div>
  );
};
