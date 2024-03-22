import React, { useState } from 'react';

import { Icon } from '../icon';
import TextToggle from '../textToggle/TextToggle';
import { IToggleGenericComponentProps } from './utils/toggle.interface';

export const ToggleGeneric = ({
  label,
  labelActive,
  icon,
  next = undefined,
  customClickEvent = undefined,
  effectDuration = 1500,
}: IToggleGenericComponentProps) => {
  const [toggleEffectActive, setToggleEffectActive] = useState(false);
  const cssBase = `group px-3 py-2 flex items-center justify-center rounded-2xl transition-all ease-in delay-50 font-poppins text-base not-italic font-semibold leading-4 text-slate-600 hover:bg-pink-200 hover:text-white`;

  const internMarkup = (
    <div className="flex">
      <span className={`w-4 h-4 mr-2 group-hover:text-pink-700`}>
        <Icon type={icon} />
      </span>

      <div className="flex">
        <TextToggle
          isRunningToggle={toggleEffectActive}
          mainText={label}
          secondaryText={labelActive}
        />
      </div>
    </div>
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
        <div className={cssBase}>{internMarkup}</div>
      </next.NextLinkComponent>
    );
  }

  return (
    <button
      className={cssBase}
      onClick={() => {
        if (customClickEvent) {
          setToggleEffectActive(true);
          setTimeout(() => {
            customClickEvent();
            setToggleEffectActive(false);
          }, effectDuration);
        }
      }}
    >
      {internMarkup}
    </button>
  );
};
