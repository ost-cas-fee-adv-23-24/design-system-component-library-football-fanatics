import React from 'react';

import { Icon } from '../icon/Icon';
import { IPropsButtonIconRounded } from './utils/button.interface';

export const ButtonIconRounded = ({
  icon,
  disabled = false,
  label,
  onCustomClick,
  href,
  openInNewTab = false,
}: IPropsButtonIconRounded) => {
  let cssClasses =
    'py-4 px-4 text-white rounded-full bg-slate-600 flex items-center justify-center';
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
      onClick={onCustomClick}
      type="button"
      disabled={disabled}
    >
      {iconMarkup}
    </button>
  );
};
