import {IButtonProps} from "./button.interface";

declare module 'component-button' {
  export interface  ButtonComponentInterface extends IButtonProps {}
  export const ButtonComponent: React.FC<ButtonComponentInterface>;
}
