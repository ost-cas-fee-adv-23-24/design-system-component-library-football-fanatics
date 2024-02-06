import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';

import { ITabSingleItemProps } from './utils/tabs.interface';

export const TabsItem = ({
  position,
  isActive,
  text,
  onClick,
  notifyValueToParent,
  identifier,
}: ITabSingleItemProps) => {
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
        'text-xl not-italic font-semibold leading-none text-current font-poppins transition-all ease-in duration-300',
        isActive ? 'text-violet-600  ' : 'text-slate-600 hover:text-slate-800',
      )}
    >
      <button
        aria-label="Tab Item"
        onClick={() => {
          if (typeof onClick === 'function') {
            onClick();
          }
        }}
      >
        {text}
      </button>
    </li>
  );
};
