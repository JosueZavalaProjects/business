"use client";

import useSalesPointState from "../components/modules/sales-point/states/sales-point-state";
import { SimpleTabs } from "../components/UI/simple-tabs";
import { TabSelection } from "../components/UI/tab-selection";

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
