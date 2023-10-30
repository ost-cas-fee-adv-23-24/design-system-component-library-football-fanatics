/**
 * Author: bladimirardiles
 * Component File Name: icon.js
 * Component Name: icon
 * Project: design-system-component-library-football-fanatics
 * Date: Mon 16/10/2023 - 13:14
 */
import React from 'react';
import './icon.css';
import { EIconColors, EIconSizes, EIConTypes } from './icon.enum';
interface IProps {
    type: EIConTypes;
    color?: EIconColors;
    size?: EIconSizes;
}
declare const Icon: ({ type, size, color }: IProps) => React.JSX.Element;
export default Icon;
