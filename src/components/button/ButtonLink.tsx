import React from 'react';

import { Icon } from '../icon';
import { IPropsLinkComponent } from './utils/button.interface';

export const Link = ({
  href,
  openInNewTab,
  label,
  icon,
  iconPosition = 'left',
}: IPropsLinkComponent) => {
  const iconMarkup = icon ? (
    <span className="inline-block">
      <Icon type={icon} />
    </span>
  ) : null;

  const textClasses = ['p-0'];

  if (icon) {
    if (iconPosition === 'right') {
      textClasses.push('mr-2');
    } else if (iconPosition === 'left') {
      textClasses.push('ml-2');
    }
  }

  const topContainerClasses =
    'c-button-link text-violet-600 flex items-center hover:border-violet-200 border-b-[1px] py-0.5 border-solid border-violet-600 transition-all ease-in delay-50';

  return (
    <a
      className={topContainerClasses}
      href={href}
      target={openInNewTab ? '_blank' : '_self'}
      aria-label={label}
    >
      {icon && iconPosition === 'left' && iconMarkup}

      <span className={textClasses.join(' ')}>{label}</span>

      {icon && iconPosition === 'right' && iconMarkup}
    </a>
  );
};