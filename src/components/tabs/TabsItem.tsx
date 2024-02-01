import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';

export interface ITabsItemProps {
  isActive: boolean;
  text: string;
  onClick?: () => void;
  width: number;
  notifyValueToParent: ({
    width,
    identifier,
    position,
  }: {
    identifier: string;
    width: number;
    position: number;
  }) => void;
  position: number;
  identifier: string;
}

export const TabsItem = ({
  position,
  isActive,
  text,
  onClick,
  notifyValueToParent,
  identifier,
}: ITabsItemProps) => {
  const ref = useRef(null);
  const [width, setWidth] = React.useState(0);

  useEffect(() => {
    if (ref.current) {
      // @ts-ignore
      setWidth(ref.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    notifyValueToParent({ identifier, width, position });
  }, [width]);

  return (
    <li
      ref={ref}
      className={clsx(
        'cursor-pointer rounded-md py-[10px] px-[14px]',
        'text-xl not-italic font-semibold leading-none text-current font-poppins',
        isActive ? 'text-violet-600  ' : 'text-slate-600 hover:text-slate-800',
      )}
    >
      <button aria-label="Tab Item" onClick={onClick}>
        {text}
      </button>
    </li>
  );
};
