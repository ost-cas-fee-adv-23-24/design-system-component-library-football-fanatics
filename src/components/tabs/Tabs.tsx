import React, { ReactNode } from 'react';

export interface ITabsProps {
  active?: boolean;
  children: ReactNode;
}

export const Tabs = ({ children }: ITabsProps) => {
  return (
    <nav className="c-tabs">
      <ul className="flex flex-row space-x-2 bg-slate-200 rounded-lg py-1 px-[5px]">
        {children}
      </ul>
    </nav>
  );
};
