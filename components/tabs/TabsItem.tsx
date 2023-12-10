import clsx from 'clsx';
import React from 'react';
import { Label } from '../label/Label';

export interface ITabsItemProps {
  isActive: boolean;
  text: string;
  onClick?: () => void;
}

export const TabsItem = ({
  isActive,
  text,
  onClick,
}: ITabsItemProps) => {
  return (
    <li className={clsx(
      'cursor-pointer rounded-md py-[10px] px-[14px]',
      isActive ? 'text-violet-600 bg-white ' : 'text-slate-600 hover:text-slate-800',

    )}>
      <button className={clsx(
      )
      }
        onClick={onClick}>
        <Label size='L' text={text} />

      </button>
    </li>



  );
};
