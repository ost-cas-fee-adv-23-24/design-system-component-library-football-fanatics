import React, { useState } from 'react';

import { ToggleLike } from './ToggleLike';
import { IToggleBase } from './utils/toggle.interface';

// this component should not be exported in the package
// only for storybook show

interface IToggleWrapper extends IToggleBase {
  labelLiked: string;
}
export const ToggleLikeWrapper = ({
  labelSingular,
  labelPlural,
  labelLiked,
  amount,
}: IToggleWrapper) => {
  const componentName = 'c-toggle-wrapper';
  const [amountIntern, setAmount] = useState(amount || 0);

  return (
    <div className={componentName}>
      <ToggleLike
        labelSingular={labelSingular}
        labelPlural={labelPlural}
        labelLiked={labelLiked}
        amount={amountIntern}
        onIncrease={(newAmount) => {
          setAmount(newAmount);
        }}
      />
    </div>
  );
};
