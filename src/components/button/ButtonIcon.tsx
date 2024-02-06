import React from 'react';

import { Icon } from '../icon';
import { IPropsButtonIcon } from './utils/button.interface';

export const ButtonIcon = ({
  label,
  icon,
  onCustomClick,
  disabled,
  type,
}: IPropsButtonIcon) => {
  let cssClasses =
    'rounded flex items-center justify-center font-poppins  text-sm not-italic font-semibold leading-3 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-300 transition-all ease-in delay-50 rounded disabled:bg-gray-200';

  if (type === 'secondary') {
    cssClasses = `${cssClasses} text-slate-400 hover:text-slate-600`;
  } else if (type === 'primary') {
    cssClasses = `${cssClasses} text-violet-600 hover:text-violet-900`;
  }
  return (
    <button
      aria-label={label}
      className={cssClasses}
      onClick={(evt) => {
        if (onCustomClick && typeof onCustomClick === 'function') {
          evt.preventDefault();
          onCustomClick();
        }
      }}
      type="button"
      disabled={disabled}
    >
      <span className="h-4 w-4 leading-none mr-[4px]">
        <Icon type={icon} />
      </span>

      <span className="">{label}</span>
    </button>
  );
};
