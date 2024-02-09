import { ContainerCard } from "../../../UI/container-card";
import useSalesPointState from "../states/sales-point-state";
import { TabSelectionItem } from "./tab-selection-item";

export const TabSelection = () => {
  const { menuNav } = useSalesPointState();
  const navItems = menuNav;

  return (
    <ContainerCard>
      <nav className="">
        <ul className="flex items-center gap-4">
          {navItems.map((item, index) => (
            <TabSelectionItem
              text={item.label}
              optionName={item.name}
              key={`TopNavBarItem_${index}`}
            />
          ))}
        </ul>
      </nav>
    </ContainerCard>
  );
};
/* (
  <ContainerCard>
    <div className="flex gap-4 px-4 font-semibold">
      <div className="text-black cursor-pointer">Comanda</div>
      <div className="text-black cursor-pointer text-cadet-grey">Checkout</div>
    </div>
  </ContainerCard>
); */
