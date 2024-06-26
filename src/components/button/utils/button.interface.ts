import { EIConTypes } from '../../icon';
import { TIconType } from '../../icon';
import { INextLinkProps } from '../../toggle';
import { EButtonKinds, EButtonSizes, EButtonTypes } from './button.enum';

interface IButtonCommon {
  label: string;
  disabled?: boolean;
  name: string;
  htmlType?: EButtonKinds;
}

interface IButtonCommonWithClickEvent extends IButtonCommon {
  onCustomClick?: () => void;
}

export interface IButtonComponentProps extends IButtonCommonWithClickEvent {
  type?: EButtonTypes;
  size?: EButtonSizes;
  icon: TIconType;
  href?: string;
  openInNewTab?: boolean;
  fitParent?: boolean;
  next?: INextLinkProps;
  selected?: boolean;
}

export interface IPropsButtonIcon extends IButtonCommonWithClickEvent {
  icon: EIConTypes;
  type: EButtonTypes.PRIMARY | EButtonTypes.SECONDARY;
  next?: INextLinkProps;
  truncate?: boolean;
}

export interface IPropsButtonIconRounded extends IButtonCommonWithClickEvent {
  icon: EIConTypes;
  disabled?: boolean;
  href?: string;
  openInNewTab?: boolean;
  next?: INextLinkProps;
}

export interface IPropsLinkComponent extends IButtonCommon {
  href: string;
  openInNewTab?: boolean;
  icon?: EIConTypes;
  iconPosition?: 'right' | 'left';
  next?: INextLinkProps;
}

export interface IPropsButtonMenu extends IButtonCommonWithClickEvent {
  icon?: string;
  href?: string;
  imageSrc?: string;
  openInNewTab?: boolean;
  next?: INextLinkProps;
}

export interface IPropsButtonTimed extends IButtonCommonWithClickEvent {
  icon: string;
  clipboardData: string;
  clipboardHighlightDelay: number;
  clipboardCopySuccessLabel: string;
  onCopyError: (message: string) => void;
}
