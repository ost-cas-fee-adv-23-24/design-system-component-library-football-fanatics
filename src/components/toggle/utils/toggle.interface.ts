import { Component } from 'react';

import { EIConTypes } from '../../icon';

export interface IToggleLikeComponentProps extends IToggleBase {
  onIncrease: (amount: number) => void;
  labelLiked: string;
  effectDuration?: number;
}

export interface IToggleCommentsComponentProps extends IToggleBase {
  NextLinkComponent?: Component;
  customClickEvent?: () => void;
  href?: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
}

export interface INextLinkProps {
  NextLinkComponent: Component;
  href: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
}

export interface IToggleBase {
  labelSingular: string;
  labelPlural: string;
  amount: number;
}

export interface IToggleGenericComponentProps {
  next?: INextLinkProps;
  label: string;
  labelActive: string;
  icon: EIConTypes;
  customClickEvent?: () => void;
  effectDuration?: number;
}
