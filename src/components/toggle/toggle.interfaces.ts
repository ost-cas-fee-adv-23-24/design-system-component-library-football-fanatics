export interface IToggleLikeComponentProps extends IToggleBase {
  onIncrease: (amount: number) => void;
  labelLiked: string;
}

export interface IToggleCommentsComponentProps extends IToggleBase {
  customClickEvent: () => void;
}

export interface IToggleBase {
  labelSingular: string;
  labelPlural: string;
  amount: number;
}
