import { useEffect, useState } from "react";

import { PRODUCTS_MOCK } from "@/constants/sales-point/mock";
import { Product as ProductType } from "@/types/sales-point";

import { ContainerCard } from "../../../UI/container-card";
import SearchInput from "../../../UI/search-input";
import useSalesPointState from "../states/sales-point-state";
import { CategoryCard } from "./components/categories/category-card";
import { AddItems } from "./components/Items/add-items";
import { Product } from "./components/products/page";

export const Order = () => {
  const [items, setItems] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [indexCategorySelected, setIndexCategorySelected] =
    useState<number>(-1);
  const [categorySelected, setCategorySelected] = useState<string>("");
  const [products, setProducts] = useState<ProductType[]>(
    Object.values(PRODUCTS_MOCK).flat()
  );
  const [productSelected, setProductSelected] = useState<number>(-1);

  const { updateProduct } = useSalesPointState();

  const CATEGORIES = Object.keys(PRODUCTS_MOCK);

  const handleAddProduct = () => {
    const productToAdd = [...products][productSelected];
    const productCheckout = { ...productToAdd, amount: items };
    updateProduct(productCheckout);
  };

  useEffect(() => {
    if (indexCategorySelected < 0) return;

    setCategorySelected(CATEGORIES[indexCategorySelected]);
    setSearchValue("");
    setProductSelected(-1);
  }, [indexCategorySelected]);

  useEffect(() => {
    setProducts(PRODUCTS_MOCK[categorySelected]);
  }, [categorySelected]);

  useEffect(() => {
    setProductSelected(-1);
    if (!searchValue && !categorySelected) {
      setProducts(Object.values(PRODUCTS_MOCK).flat());
      return;
    }

    if (!searchValue) {
      setProducts(PRODUCTS_MOCK[categorySelected]);
      return;
    }

    const newProducts = [...products].filter((product) =>
      product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setProducts(newProducts);
  }, [searchValue]);

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

      {/* Productos */}
      <ContainerCard>
        <div className="flex flex-col gap-2 text-black p-2">
          <AddItems
            items={items}
            setItems={setItems}
            disabled={productSelected < 0 || items <= 0}
            addProduct={handleAddProduct}
          />
          <div className="w-full">
            <SearchInput value={searchValue} setValue={setSearchValue} />
          </div>
          <div className="flex flex-col gap-1 py-2 max-h-60 overflow-y-scroll">
            {products.length > 0 &&
              products.map((product, index) => (
                <Product
                  key={`${categorySelected}_product_${index}`}
                  name={product.name}
                  index={index}
                  isSelected={index === productSelected}
                  setProductSelected={setProductSelected}
                />
              ))}
          </div>
        </div>
      </ContainerCard>
    </div>
  );
};
