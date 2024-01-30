import clsx from 'clsx';
import React from 'react';

export interface ITabsItemProps {
  isActive: boolean;
  text: string;
  onClick?: () => void;
}

export const TabsItem = ({ isActive, text, onClick }: ITabsItemProps) => {
  return (
    <li
      className={clsx(
        'cursor-pointer rounded-md py-[10px] px-[14px]',
        'text-xl not-italic font-semibold leading-none text-current font-poppins',
        isActive
          ? 'text-violet-600 bg-white '
          : 'text-slate-600 hover:text-slate-800',
      )}
    >
      <button aria-label="Tab Item" onClick={onClick}>
        {text}
      </button>
    </li>
  );
};
