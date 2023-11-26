import {
  EButtonIconPosition,
  EButtonKinds,
  EButtonSizes,
  EButtonTypes,
} from './button.enum';
import { TIconType } from '../icon/icon.interface';

export interface IButtonProps {
  type?: EButtonTypes.PRIMARY | EButtonTypes.SECONDARY | EButtonTypes.TERTIARY;
  size?: EButtonSizes.MEDIUM | EButtonSizes.SMALL | EButtonSizes.LARGE;
  label: string;
  onClickEvent: () => void;
  icon?: TIconType;
  iconPosition?: EButtonIconPosition.LEFT | EButtonIconPosition.RIGHT;
  href?: string;
  disabled?: boolean;
  kind?: EButtonKinds.BUTTON | EButtonKinds.LINK;
  onlyIcon?: boolean;
}
