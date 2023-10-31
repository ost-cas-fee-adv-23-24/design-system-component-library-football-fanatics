/**
 * Author: bladimirardiles
 * Component File Name: icon.js
 * Component Name: icon
 * Project: design-system-component-library-football-fanatics
 * Date: Mon 16/10/2023 - 13:14
 */

import React, { useMemo } from 'react';
import './icon.css';
import { EIConTypes } from './icon.enum';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from '@heroicons/react/24/solid';
import {IIconProps} from "./icon.interface";


const Icon = ({ type, size, color }: IIconProps) => {
  const componentName = 'c-icon';
  const cssClasses = useMemo(() => {
    const decorations = [];
    if (size) {
      decorations.push(`h-${size}`);
      decorations.push(`w-${size}`);
    } else {
      decorations.push(`c-icon--fit-parent`);
    }

    if (color) {
      decorations.push(`text-${color}-500`);
    } else {
      decorations.push(`text-inherit`);
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
