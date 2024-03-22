import React, { useState } from 'react';

import { Tabs } from './Tabs';
import { ITabsItemProps } from './utils/tabs.interface';

interface IProps {
  tabItemsMock: Array<ITabsItemProps>;
}
export const TabsGroup = ({ tabItemsMock }: IProps) => {
  const [tabItems, setTabs] = useState<Array<ITabsItemProps>>(tabItemsMock);

  const updateSelection = (tabIndexNumber: number) => {
    const tabsUpdated = tabItems.map((tabItem, index) => {
      if (tabIndexNumber === index) {
        return { ...tabItem, isActive: true };
      }
      return { ...tabItem, isActive: false };
    });
    setTabs(tabsUpdated);
  };

  return (
    <div className="tabs-parent">
      <Tabs
        tabItems={tabItems}
        updateSelection={(tabIndex) => {
          updateSelection(tabIndex);
        }}
      />
    </div>
  );
};
