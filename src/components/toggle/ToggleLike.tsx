import React, { useState } from 'react';
import { EIConTypes } from '../icon/icon.enum';
import { Icon } from '../icon/Icon';
import { IToggleLikeComponentProps } from './toggle.interfaces';
import TextToggle from '../textToggle/TextToggle';

export const ToggleLike = ({
  labelSingular,
  labelPlural,
  amount = 0,
  labelLiked,
  onIncrease,
}: IToggleLikeComponentProps) => {
  const [toggleEffectActive, setToggleEffectActive] = useState(false);

  const cssBase =
    'group px-6 py-4 flex items-center justify-center rounded-2xl transition-all ease-in delay-50 font-poppins text-base not-italic font-semibold leading-4 hover:text-pink-600 hover:bg-pink-50';

  return (
    <button
      className={`${cssBase} ${
        amount > 0 ? 'active:text-pink-900 text-pink-900' : 'text-slate-600'
      }`}
      disabled={toggleEffectActive}
      onClick={() => {
        setToggleEffectActive(true);
        setTimeout(() => {
          onIncrease(amount + 1);
          setToggleEffectActive(false);
        }, 1000);
      }}
    >
      <div className="flex">
        <span
          className={`w-4 h-4 mr-2 group-hover:text-pink-500 ${
            amount > 0 ? 'text-pink-500' : ''
          }`}
        >
          <Icon
            type={
              toggleEffectActive || amount > 0
                ? EIConTypes.HEART_FILLED
                : EIConTypes.HEART_BORDERED
            }
          />
        </span>

        <div className="flex relative h-4">
          <TextToggle
            isRunningToggle={toggleEffectActive}
            mainText={`${amount > 0 ? amount : ''} ${
              amount > 1 ? labelPlural : labelSingular
            }`}
            secondaryText={labelLiked}
          />
        </div>
      </div>
    </button>
  );
};
