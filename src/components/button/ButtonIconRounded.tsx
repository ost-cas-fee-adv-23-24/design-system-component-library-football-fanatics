import React from 'react';

import { Icon } from '../icon/Icon';
import { EIConTypes } from '../icon/icon.enum';

interface IPropsButtonIconRounded {
  icon: EIConTypes;
  label: string;
  onClickEvent?: () => void;
  disabled?: boolean;
  href?: string;
  openInNewTab?: boolean;
}

export const ButtonIconRounded = ({
  icon,
  disabled,
  label,
  onClickEvent,
  href,
  openInNewTab = false,
}: IPropsButtonIconRounded) => {
  let cssClasses =
    'py-8 px-8 text-white rounded-full bg-slate-600 flex items-center justify-center';
  cssClasses += ' hover:outline-[3px] hover:outline hover:outline-slate-100'; // hover states
  cssClasses += ' active:outline-[4px] active:outline active:outline-slate-200'; // active states
  cssClasses += ' bg-slate-600 text-white'; // colors states

  const iconMarkup = (
    <span className="inline-block h-4 w-4 leading-none">
      <Icon type={icon} />
    </span>
  );

  if (href) {
    return (
      <a
        aria-label={label}
        className={`${cssClasses} ${disabled ? 'pointer-events-none' : ''}`}
        href={href}
        target={openInNewTab ? '_blank' : '_self'}
        rel="noreferrer"
      >
        {iconMarkup}
      </a>
    );
  }

  return (
    <button
      className={cssClasses}
      aria-label={label}
      onClick={onClickEvent}
      type="button"
      disabled={disabled}
    >
      {iconMarkup}
    </button>
  );
};
