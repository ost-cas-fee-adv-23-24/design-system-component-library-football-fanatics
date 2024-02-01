export interface IToggleLikeComponentProps extends IToggleBase {
  onIncrease: (amount: number) => void;
  labelLiked: string;
  effectDuration?: number;
}

export interface IToggleCommentsComponentProps extends IToggleBase {
  customClickEvent: () => void;
}

export interface IToggleBase {
  labelSingular: string;
  labelPlural: string;
  amount: number;
}
