import React from 'react';

import { EIConTypes, Icon } from '../icon';
import { Image } from '../image';
import { EImageLoadingType } from '../image';
import { EButtonKinds } from './utils/button.enum';
import { IPropsButtonMenu } from './utils/button.interface';

export const ButtonMenu = ({
  label,
  icon,
  onCustomClick,
  imageSrc,
  disabled = false,
  href,
  openInNewTab = false,
  next,
  name,
  htmlType = EButtonKinds.BUTTON,
}: IPropsButtonMenu) => {
  let cssClasses =
    'inline-flex h-[54px] p-2 min-w-[54px] flex-col justify-center items-center flex-shrink-0 bg-violet-600 text-white rounded-lg'; //layout
  cssClasses += ' font-poppins text-base not-italic font-semibold leading-4'; // font
  cssClasses += ' hover:bg-violet-700'; // states

  const iconMarkup = icon ? (
    <span className="h-4 w-4 leading-none">
      <Icon type={icon as EIConTypes} />
    </span>
  ) : null;

  const imageMarkup = imageSrc ? (
    <div className="w-10 h-10 rounded-full bg-violet-200">
      <Image alt={label} src={imageSrc} loadingType={EImageLoadingType.EAGER} />
    </div>
  ) : null;

  const labelMarkup = <span className="mt-1">{label}</span>;

  if (href) {
    return (
      <a
        aria-label={label}
        className={`${cssClasses} ${disabled ? 'pointer-events-none' : ''}`}
        href={href}
        target={openInNewTab ? '_blank' : '_self'}
        rel="noreferrer"
      >
        {icon && iconMarkup}

        {imageSrc && imageMarkup}

        {!imageSrc && labelMarkup}
      </a>
    );
  }

  if (next && next.NextLinkComponent) {
    return (
      // @ts-ignore
      <next.NextLinkComponent
        href={next.href}
        prefetch={next.prefetch || true}
        replace={next.replace || false}
        scroll={next.scroll || true}
      >
        <div className={cssClasses}>
          {icon && iconMarkup}

          {imageSrc && imageMarkup}

          {!imageSrc && labelMarkup}
        </div>
      </next.NextLinkComponent>
    );
  }

  return (
    <button
      name={name}
      className={cssClasses}
      aria-label={label}
      onClick={(evt) => {
        if (onCustomClick && typeof onCustomClick === 'function') {
          evt.preventDefault();
          onCustomClick();
        }
      }}
      type={htmlType}
      disabled={disabled}
    >
      {icon && iconMarkup}

      {imageSrc && imageMarkup}

      {!imageSrc && labelMarkup}
    </button>
  );
};
