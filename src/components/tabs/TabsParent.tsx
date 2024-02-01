import React, { useState } from 'react';

import { Tabs } from './Tabs';

const tabsData = [
  {
    isActive: true,
    text: 'Tabbb 1',
    identifier: 'tab-1',
  },
  {
    isActive: false,
    text: 'Tab 2',
    identifier: 'tab-2',
  },
  {
    isActive: false,
    text: 'Tabitete 3',
    identifier: 'tab-3',
  },
];

export const TabsGroup = () => {
  const [tabItems, setTabs] = useState(tabsData);

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
