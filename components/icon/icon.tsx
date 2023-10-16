/**
 * Author: bladimirardiles
 * Component File Name: icon.js
 * Component Name: icon
 * Project: design-system-component-library-football-fanatics
 * Date: Mon 16/10/2023 - 13:14
 */

import React, { useMemo } from 'react';
import { EIconColors, EIconSizes, EIConTypes } from './icon.enum';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from '@heroicons/react/24/solid';

interface IProps {
  type: EIConTypes;
  color: EIconColors;
  size: EIconSizes;
}

const Icon = ({ type, size = EIconSizes.MD, color }: IProps) => {
  const componentName = 'c-icon';
  const cssClasses = useMemo(() => {
    const decorations = [];
    if (size) {
      decorations.push(`h-${size}`);
      decorations.push(`w-${size}`);
    }

    if (color) {
      decorations.push(`text-${color}-500`);
    } else {
      decorations.push(`text-gray-500`);
    }

    return `${componentName} ${decorations.join(' ')} `;
  }, [size]);
  const iconMarkup = useMemo(() => {
    switch (type) {
      case EIConTypes.ARROW_LEFT:
        return <ArrowLeftIcon />;
      case EIConTypes.ARROW_RIGHT:
        return <ArrowRightIcon />;
      case EIConTypes.ARROW_DOWN:
        return <ArrowDownIcon />;
      case EIConTypes.ARROW_UP:
        return <ArrowUpIcon />;
    }
  }, [type]);

  return <div className={cssClasses}>{iconMarkup}</div>;
};

export default Icon;
