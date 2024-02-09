"use client";

import useSalesPointState from "../components/modules/sales-point/states/sales-point-state";
import { TabSelection } from "../components/modules/sales-point/tab-selection";
import { SimpleTabs } from "../components/UI/simple-tabs";

export default function SalesPointPage() {
  const { tabsContents, menuNav, tabName, setTabName } = useSalesPointState();

  return (
    <div className="grid">
      <TabSelection
        navItems={menuNav}
        tabName={tabName}
        setTabName={setTabName}
      />
      <SimpleTabs tabsContents={tabsContents} />
    </div>
  );
}
