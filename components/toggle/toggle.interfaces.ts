import { EToggleKinds } from './toggle.enums';

export interface IToggleComponentProps {
  kind: EToggleKinds.LIKE | EToggleKinds.COMMENT;
  amount?: number;
  label?: string;
}
