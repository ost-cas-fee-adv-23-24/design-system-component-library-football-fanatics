/// <reference types="react" />
import { IButtonProps } from './button.interface';
import './button.css';
/**
 * Primary UI component for user interaction
 */
declare const Button: ({ type, size, iconPosition, icon, label, onClickEvent, href, disabled, }: IButtonProps) => import("react").JSX.Element;
export default Button;
