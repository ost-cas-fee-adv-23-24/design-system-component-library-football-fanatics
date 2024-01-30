import { EToggleKinds } from './toggle.enums';

export interface IToggleComponentProps {
  kind: EToggleKinds.LIKE | EToggleKinds.COMMENT;
  amount?: number;
  labelSingular: string;
  labelPlural: string;
  labelLiked: string;
}
