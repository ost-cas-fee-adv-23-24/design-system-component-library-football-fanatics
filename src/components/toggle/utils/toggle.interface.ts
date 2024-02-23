import { Component } from 'react';

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
  href?: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
}

export interface IToggleBase {
  labelSingular: string;
  labelPlural: string;
  amount: number;
}
