import React from 'react';

import { Icon } from '../icon/Icon';
import { EIConTypes } from '../icon/icon.enum';
import TextToggle from '../textToggle/TextToggle';

interface IProps {
  label: string;
  icon: string;
  clipboardData: string;
  clipboardHighlightDelay: number;
  clipboardCopySuccessLabel: string;
  onCustomClick: () => void;
  onCopyError: (message: string) => void;
  disabled: boolean;
}

const ButtonTimed = ({
  label,
  clipboardCopySuccessLabel,
  clipboardHighlightDelay,
  clipboardData,
  onCopyError,
  icon,
  disabled,
}: IProps) => {
  const [runningEffect, setRunningEffect] = React.useState(false);

  const cssBaseClasses =
    'rounded px-8 py-4 flex items-center justify-center font-poppins text-base not-italic font-semibold leading-4 transition-all ease-in delay-50 text-slate-600 rounded-2xl hover:bg-slate-100 hover:text-slate-700 active:text-slate-700';

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
            onCopyError(error.message);
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

export default ButtonTimed;
