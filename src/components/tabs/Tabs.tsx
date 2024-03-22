import React, { useEffect, useMemo, useState } from 'react';

import { TabsItem } from './TabsItem';
import { ITabsProps } from './utils/tabs.interface';

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

    setTimeout(() => {
      const indexSelectedTab = tabItems.findIndex(
        (tabItem) => tabItem.isActive,
      );
      setCurrentActive(indexSelectedTab);
    }, 10);
  }, []);

  const selectedTabWidth = useMemo(() => {
    if (tabWidths.length === 0) return 0;

    return tabWidths[currentActive].width;
  }, [currentActive, tabWidths]);

  const pusherWidth = useMemo(() => {
    if (currentActive === 0) return 0;
    let pusherWidth = 0;
    for (let x = 0; x < currentActive; x++) {
      pusherWidth += tabWidths[x].width;
    }
    return pusherWidth;
  }, [tabWidths, currentActive]);

  return (
    <nav className="c-tabs group">
      <div className="bg-slate-200 rounded-lg relative flex flex-row w-full">
        <div className="absolute top-0 bottom-0 w-full">
          <div className="flex py-1 px-[5px] h-[48px]">
            <div
              className="pusher transition-all ease-in duration-300"
              style={{ width: pusherWidth }}
            >
              &nbsp;
            </div>

            <div
              className="bg-tab rounded-md py-[14px] px-[14px]  bg-white"
              style={{ width: selectedTabWidth, height: '40px' }}
            />
          </div>
        </div>

        <ul className="flex flex-row py-1 px-[5px] relative">
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
      </div>
    </nav>
  );
};
