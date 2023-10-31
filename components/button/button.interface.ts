import { EButtonIconPosition, EButtonSizes, EButtonTypes } from './button.enum';
import { EIConTypes } from '../icon/icon.enum';

export interface IButtonProps {
  type?: EButtonTypes.PRIMARY | EButtonTypes.SECONDARY | EButtonTypes.TERTIARY;
  size?: EButtonSizes.MEDIUM | EButtonSizes.SMALL | EButtonSizes.LARGE;
  label: string;
  onClickEvent: () => void;
  icon?: EIConTypes;
  iconPosition?: EButtonIconPosition.LEFT | EButtonIconPosition.RIGHT;
  href?: string;
  disabled?: boolean;
}
