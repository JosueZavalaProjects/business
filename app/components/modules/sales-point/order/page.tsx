import { useEffect, useState } from "react";

import { PRODUCTS_MOCK } from "@/constants/sales-point";

import { ContainerCard } from "../../../UI/container-card";
import SearchInput from "../../../UI/search-input";
import { CategoryCard } from "../categories/category-card";
import { AddItems } from "../Items/add-items";
import { Product } from "../products/page";
import { TabSelection } from "../tab-selection";

export const Order = () => {
  const [items, setItems] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [indexCategorySelected, setIndexCategorySelected] =
    useState<number>(-1);
  const [categorySelected, setCategorySelected] = useState<string>("");

  const CATEGORIES = Object.keys(PRODUCTS_MOCK);

  useEffect(() => {
    if (indexCategorySelected < 0) return;

    setCategorySelected(CATEGORIES[indexCategorySelected]);
  }, [indexCategorySelected]);

  return (
    <div className="grid p-4 gap-4">
      {/* Categorias */}
      <ContainerCard>
        <div className="flex gap-4 p-6">
          {CATEGORIES.map((category, index) => (
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
      {/* <TabSelection /> */}

      {/* Productos */}
      <ContainerCard>
        <div className="flex flex-col gap-2 text-black p-2">
          <AddItems items={items} setItems={setItems} />
          <div className="w-full">
            <SearchInput value={searchValue} setValue={setSearchValue} />
          </div>
          <div className="flex flex-col gap-1 py-2 max-h-60 overflow-y-scroll">
            {categorySelected &&
              PRODUCTS_MOCK[categorySelected].map((product, index) => (
                <Product
                  key={`${categorySelected}_product_${index}`}
                  name={product.name}
                />
              ))}
            {/* <Product name="Llavero de animalitos" isSelected />
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
            <Product name="Llavero de refri" /> */}
          </div>
        </div>
      </ContainerCard>
    </div>
  );
};
