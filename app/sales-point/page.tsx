import { Header } from "../components/Layout/header";
import { ContainerCard } from "../components/UI/container-card/page";
import { CategoryCard } from "../components/sales-point/categories/category-card";

export default function SalesPointPage() {
  return (
    <div className="grid">
      <Header />
      <div className="grid p-4 gap-4">
        <ContainerCard>
          <div className="flex gap-2 p-6">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </ContainerCard>
        <ContainerCard>
          <div>Categorias</div>
        </ContainerCard>
      </div>
      <div>footer</div>
    </div>
  );
}
