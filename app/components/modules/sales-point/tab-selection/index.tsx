import { NavOptions } from "@/types/UI/common";

import { ContainerCard } from "../../../UI/container-card";
import { TabSelectionItem } from "./tab-selection-item";

type TabSelectionProps = {
  navItems: NavOptions[];
  tabName: string;
  setTabName: (tabName: string) => void;
};

export const TabSelection = ({
  navItems,
  tabName,
  setTabName,
}: TabSelectionProps) => {
  return (
    <ContainerCard>
      <nav className="">
        <ul className="flex items-center gap-4">
          {navItems.map((item, index) => (
            <TabSelectionItem
              text={item.label}
              optionName={item.name}
              tabName={tabName}
              setTabName={setTabName}
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
