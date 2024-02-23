import React from 'react';

import { EIConTypes, Icon } from '../icon';
import { IToggleCommentsComponentProps } from './utils/toggle.interface';

export const ToggleComment = ({
  labelSingular,
  labelPlural,
  amount,
  customClickEvent,
  isNextLink = false,
  ...props
}: IToggleCommentsComponentProps) => {
  const cssBase =
    'group px-3 py-2 flex items-center justify-center rounded-2xl transition-all ease-in delay-50 font-poppins text-base not-italic font-semibold leading-4 hover:bg-violet-50 hover:text-violet-600';

  const iconType =
    amount > 0 ? EIConTypes.COMMENT_FILLED : EIConTypes.COMMENT_BORDERED;

  const internMarkup = (
    <div className="flex">
      <span
        className={`w-4 h-4 mr-2 group-hover:text-violet-600  ${
          amount > 0 ? 'text-violet-600' : ''
        }`}
      >
        <Icon type={iconType} />
      </span>

      <div className="flex">
        {amount > 0 && <div className="mr-1">{amount}</div>}

        <div>{amount > 1 ? labelPlural : labelSingular}</div>
      </div>
    </div>
  );

  if (isNextLink) {
    const LinkComponent = `Link`;
    return (
      // @ts-ignore
      <LinkComponent {...(props as any)}>
        <div className={cssBase}>{internMarkup}</div>
      </LinkComponent>
    );
  }

  return (
    <button
      className={cssBase}
      onClick={() => {
        if (customClickEvent) {
          customClickEvent();
        }
      }}
    >
      {internMarkup}
    </button>
  );
};
