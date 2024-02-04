import React from 'react';

import { EIConTypes, Icon } from '../icon';
import TextToggle from '../textToggle/TextToggle';
import { IPropsButtonTimed } from './utils/button.interface';

export const ButtonTimed = ({
  label,
  clipboardCopySuccessLabel,
  clipboardHighlightDelay,
  clipboardData,
  onCopyError,
  icon,
  disabled = false,
}: IPropsButtonTimed) => {
  const [runningEffect, setRunningEffect] = React.useState(false);

  const cssBaseClasses =
    'rounded px-3 py-2 flex items-center justify-center font-poppins text-base not-italic font-semibold leading-4 transition-all ease-in delay-50 text-slate-600 rounded-2xl hover:bg-slate-100 hover:text-slate-700 active:text-slate-700';

  return (
    <button
      className={cssBaseClasses}
      aria-label={label}
      onClick={() => {
        navigator.clipboard
          .writeText(clipboardData)
          .then(() => {
            setRunningEffect(true);
            setTimeout(() => {
              setRunningEffect(false);
            }, clipboardHighlightDelay);
          })
          .catch((error: Error) => {
            setRunningEffect(false);
            if (error && error.message) {
              onCopyError(error.message);
            }
          });
      }}
      type="button"
      disabled={disabled}
    >
      <span className="flex mr-2">
        <Icon type={icon as EIConTypes} />
      </span>

      <div className="flex">
        <TextToggle
          isRunningToggle={runningEffect}
          mainText={label}
          secondaryText={clipboardCopySuccessLabel}
        />
      </div>
    </button>
  );
};
