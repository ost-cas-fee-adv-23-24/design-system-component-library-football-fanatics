import { EButtonIconPosition, EButtonSizes, EButtonTypes } from './button.enum';
import { EIConTypes } from '../icon/icon.enum';

export interface IButtonProps {
  type: EButtonTypes;
  size?: EButtonSizes;
  label: string;
  onClickEvent: () => void;
  icon?: EIConTypes;
  iconPosition?: EButtonIconPosition;
}
