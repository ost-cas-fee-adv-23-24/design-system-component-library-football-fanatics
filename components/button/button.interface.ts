import {
  EButtonIconPosition,
  EButtonKinds,
  EButtonSizes,
  EButtonTypes,
} from './button.enum';
import { TIconType } from '../icon/icon.interface';

export interface IButtonComponentProps {
  type?: EButtonTypes.PRIMARY | EButtonTypes.SECONDARY | EButtonTypes.TERTIARY;
  size?: EButtonSizes.MEDIUM | EButtonSizes.SMALL | EButtonSizes.LARGE;
  label: string;
  onClickEvent: () => void;
  icon?: TIconType;
  iconPosition?:
    | EButtonIconPosition.LEFT
    | EButtonIconPosition.RIGHT
    | EButtonIconPosition.TOP;
  href?: string;
  disabled?: boolean;
  kind?:
    | EButtonKinds.BUTTON
    | EButtonKinds.LINK
    | EButtonKinds.BUTTON_AS_LINK
    | EButtonKinds.COPY_TO_CLIPBOARD
    | EButtonKinds.BUTTON_ICON
    | EButtonKinds.BUTTON_ICON_MENU;
  onlyIcon?: boolean;
  openInNewTab?: boolean;
  clipboardData?: string;
  clipboardHighlightDelay?: number;
  clipboardCopySuccessLabel?: string;
  clipboardCopyErrorLabel?: string;
}
