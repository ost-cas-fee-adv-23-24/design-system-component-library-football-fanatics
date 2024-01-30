import { TIconType } from '../icon/icon.interface';
import { EButtonSizes, EButtonTypes } from './button.enum';

export interface IButtonComponentProps {
  type?: EButtonTypes.PRIMARY | EButtonTypes.SECONDARY | EButtonTypes.TERTIARY;
  size?: EButtonSizes.MEDIUM | EButtonSizes.SMALL | EButtonSizes.LARGE;
  label: string;
  onClickEvent?: () => void;
  icon: TIconType;
  href?: string;
  disabled?: boolean;
  onlyIcon?: boolean;
  openInNewTab?: boolean;
  clipboardData?: string;
  clipboardHighlightDelay?: number;
  clipboardCopySuccessLabel?: string;
  clipboardCopyErrorLabel?: string;
  fitParent?: boolean;
  imageSrc?: string;
}
