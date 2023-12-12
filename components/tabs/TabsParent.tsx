import React, { useState } from 'react';
import { Tabs } from './Tabs';
import { ITabsItemProps, TabsItem } from './TabsItem';

type ITabParentProps = {
  tabItems: ITabsItemProps[];
};

export const TabsGroup = ({ tabItems }: ITabParentProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs>
      {tabItems.map((tabItem, index) => (
        <div key={index}>
          <TabsItem
            key={index}
            text={tabItem.text}
            onClick={() => setActiveTab(index)}
            isActive={activeTab === index}
          />
        </div>
      ))}
    </Tabs>
  );
};
