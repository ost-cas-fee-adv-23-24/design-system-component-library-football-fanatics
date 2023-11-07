/**
 * Author: bladimirardiles
 * Component File Name: GroupButtons.js
 * Component Name: GroupButtons
 * Project: design-system
 * Date: Sat 28/10/2023 - 17:37
 */

import React from 'react';

interface IProps {
  children?: Array<React.ReactNode>;
}

const GroupButtons = ({ children }: IProps) => {
  const componentName = 'c-group-buttons';
  return <div className={componentName}>{children}</div>;
};

export default GroupButtons;
