import React from 'react';

import { ITextToggleProps } from './utils/textToggle.interface';

const TextToggle = ({
  isRunningToggle,
  mainText,
  secondaryText,
}: ITextToggleProps) => {
  return (
    <div className="flex relative h-4">
      <div
        className={`flex transition-opacity duration-300 ${
          isRunningToggle ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div>{mainText}</div>
      </div>
      <div
        className={`absolute transition-opacity duration-300 ${
          isRunningToggle ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {secondaryText}
      </div>
    </div>
  );
};

export default TextToggle;
