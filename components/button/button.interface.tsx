import { EButtonIconPosition, EButtonSizes, EButtonTypes } from './button.enum';
import React from 'react';

export interface IButtonProps {
  type: EButtonTypes;
  size: EButtonSizes;
  label: string;
  onClickEvent: () => void;
  icon?: React.ReactNode;
  iconPosition: EButtonIconPosition;
}
