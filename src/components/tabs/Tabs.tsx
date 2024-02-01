import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { TabsItem } from './TabsItem';

export interface ITabsItemProps {
  isActive: boolean;
  text: string;
  onClick?: () => void;
  identifier: string;
}

export interface ITabsProps {
  updateSelection: (index: number) => void;
  tabItems: ITabsItemProps[];
}

export const Tabs = ({ tabItems, updateSelection }: ITabsProps) => {
  const [tabWidths, setTabWidths] = useState<
    Array<{
      identifier: string;
      width: number;
    }>
  >([]);
  const [currentActive, setCurrentActive] = useState(0);

  useEffect(() => {
    const widthsInfo = tabItems.map((tabItem) => {
      return { identifier: tabItem.identifier, width: 0 };
    });
    setTabWidths(widthsInfo);
  }, []);

  const selectedTabWidth = useMemo(() => {
    if (tabWidths.length === 0) return 0;
    return tabWidths[currentActive].width;
  }, [currentActive, tabWidths]);

  const pusherWidth = useMemo(() => {
    if (currentActive === 0) return 0;
    return tabWidths[currentActive].width;
  }, [tabWidths, currentActive]);

  return (
    <nav className="c-tabs group">
      <div className="">
        <div className="bg-wrapper flex">
          <div
            className="pusher transition-all ease-in duration-300"
            style={{ width: pusherWidth }}
          ></div>
          <div
            className="bg-tab bg-red h-4 "
            style={{ width: selectedTabWidth }}
          ></div>
        </div>
      </div>
      <ul className="flex flex-row space-x-2 bg-slate-200 rounded-lg py-1 px-[5px]">
        {tabItems.map((tabItem, index) => {
          const tabWidth = tabWidths.find(
            (tab) => tab.identifier === tabItem.identifier,
          );
          return (
            <TabsItem
              position={index}
              identifier={tabItem.identifier}
              key={index}
              notifyValueToParent={({ width, identifier, position }) => {
                if (width === 0) return;
                const clone = [...tabWidths];
                clone[index].width = width;
                setTabWidths(clone);
              }}
              width={tabWidth?.width || 0}
              text={tabItem.text}
              onClick={() => {
                updateSelection(index);
                setCurrentActive(index);
              }}
              isActive={tabItem.isActive}
            />
          );
        })}
      </ul>
    </nav>
  );
};
