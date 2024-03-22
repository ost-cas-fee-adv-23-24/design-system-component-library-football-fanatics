import React from 'react';

import { Icon } from '../icon';
import { EButtonKinds } from './utils/button.enum';
import { IPropsButtonIcon } from './utils/button.interface';

export const ButtonIcon = ({
  label,
  icon,
  onCustomClick,
  disabled,
  type,
  next = undefined,
  name,
  htmlType = EButtonKinds.BUTTON,
  truncate = false,
}: IPropsButtonIcon) => {
  let cssClasses = `rounded ${
    truncate ? 'truncate' : 'flex items-center justify-center'
  } font-poppins  text-sm not-italic font-semibold leading-3 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-300 transition-all ease-in delay-50 rounded disabled:bg-gray-200`;

  if (type === 'secondary') {
    cssClasses = `${cssClasses} text-slate-400 hover:text-slate-600`;
  } else if (type === 'primary') {
    cssClasses = `${cssClasses} text-violet-600 hover:text-violet-900`;
  }

  const internMarkup = (
    <>
      <span className="h-4 w-4 leading-none mr-[4px]">
        <Icon type={icon} />
      </span>

      <span className="">{label}</span>
    </>
  );

  if (next && next.NextLinkComponent) {
    return (
      // @ts-ignore
      <next.NextLinkComponent
        href={next.href}
        prefetch={next.prefetch || true}
        replace={next.replace || false}
        scroll={next.scroll || true}
      >
        <div className={cssClasses}>{internMarkup}</div>
      </next.NextLinkComponent>
    );
  }

  return (
    <button
      name={name}
      aria-label={label}
      className={cssClasses}
      onClick={(evt) => {
        if (onCustomClick && typeof onCustomClick === 'function') {
          evt.preventDefault();
          onCustomClick();
        }
      }}
      type={htmlType}
      disabled={disabled}
    >
      {internMarkup}
    </button>
  );
};
