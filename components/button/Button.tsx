import { IButtonProps } from './button.interface';
import {
  EButtonIconPosition,
  EButtonKinds,
  EButtonSizes,
  EButtonTypes,
} from './button.enum';
import { useMemo } from 'react';
import Icon from '../icon/Icon';
import btnBase, { colors, lg, md, onlyIconCss, sm } from './css';

/**
 * Primary UI component for user interaction
 */
const Button = ({
  type = EButtonTypes.PRIMARY,
  size,
  iconPosition = EButtonIconPosition.LEFT,
  icon,
  label,
  onClickEvent,
  href,
  disabled = false,
  onlyIcon = false,
  kind = EButtonKinds.BUTTON,
}: IButtonProps) => {
  const componentName = 'c-button';
  const cssClasses = useMemo(() => {
    if (onlyIcon) {
      let iconClasses = [componentName, ...onlyIconCss.topContainer];
      switch (type) {
        case EButtonTypes.TERTIARY:
          iconClasses = [
            ...iconClasses,
            ...colors.tertiary,
            'hover:bg-gradient-pink-violet-3070',
            'active:bg-gradient-pink-violet-2080',
          ];
          break;
        case EButtonTypes.PRIMARY:
          iconClasses = [...iconClasses, ...colors.primary];
          break;
        case EButtonTypes.SECONDARY:
          iconClasses = [...iconClasses, ...colors.secondary];
          break;
        default:
          iconClasses = [...colors.primary];
      }
      return `${iconClasses.join(' ')}`;
    }

    let modifier = [...btnBase.topContainer];
    switch (size) {
      case EButtonSizes.LARGE:
        modifier = [...modifier, ...lg.topContainer];
        break;
      case EButtonSizes.MEDIUM:
        modifier = [...modifier, ...md.topContainer];
        break;
      case EButtonSizes.SMALL:
        modifier = [...modifier, ...sm.topContainer];
        break;
      default:
        modifier = [...modifier, ...md.topContainer];
    }

    switch (type) {
      case EButtonTypes.TERTIARY:
        modifier = [
          ...modifier,
          ...colors.tertiary,
          'hover:bg-gradient-pink-violet-3070',
          'active:bg-gradient-pink-violet-2080',
        ];
        break;
      case EButtonTypes.PRIMARY:
        modifier = [...modifier, ...colors.primary];
        break;
      case EButtonTypes.SECONDARY:
        modifier = [...modifier, ...colors.secondary];
        break;
      default:
        modifier = [...modifier, ...colors.primary];
    }
    return `${componentName} ${modifier.join(' ')}`;
  }, [type, size, disabled, onlyIcon]);

  const iconClasses = useMemo(() => {
    let classes: Array<string> = [];
    switch (size) {
      case EButtonSizes.LARGE:
        classes = [...classes, ...lg.iconContainer];
        break;
      case EButtonSizes.MEDIUM:
        classes = [...classes, ...md.iconContainer];
        break;
      case EButtonSizes.SMALL:
        classes = [...classes, ...sm.iconContainer];
        break;
      default:
        classes = [...classes, ...md.iconContainer];
    }

    return classes;
  }, [size]);

  const iconMarkup = useMemo(() => {
    return icon ? (
      <span className={`c-button__icon  ${iconClasses.join(' ')}`}>
        <Icon type={icon} />
      </span>
    ) : null;
  }, [icon, iconClasses]);

  if (onlyIcon) {
    if (kind === EButtonKinds.LINK) {
      return (
        <a
          className={cssClasses}
          href={href}
          target="_blank"
          title={label}
          aria-label={label}
        >
          {iconMarkup}
        </a>
      );
    } else if (kind === EButtonKinds.BUTTON) {
      return (
        <button
          className={`${cssClasses} ${
            disabled ? onlyIconCss.disabledState.join(' ') : ''
          }`}
          onClick={onClickEvent}
          type="button"
          disabled={disabled}
        >
          {iconMarkup}
        </button>
      );
    } else {
      console.log(`button kind ${kind} is not supported`);
      return null;
    }
  } else {
    if (kind === EButtonKinds.LINK) {
      return (
        <a className={cssClasses} href={href} target="_blank">
          {icon && iconPosition === EButtonIconPosition.LEFT && iconMarkup}
          <span className={`c-button__text ${btnBase.textContainer.join(' ')}`}>
            {label}
          </span>
          {icon && iconPosition === EButtonIconPosition.RIGHT && iconMarkup}
        </a>
      );
    } else if (kind === EButtonKinds.BUTTON) {
      return (
        <button
          className={`${cssClasses} ${
            disabled ? btnBase.disabledState.join(' ') : ''
          }`}
          onClick={onClickEvent}
          type="button"
          disabled={disabled}
        >
          {icon && iconPosition === EButtonIconPosition.LEFT && iconMarkup}
          <span className={`c-button__text ${btnBase.textContainer.join(' ')}`}>
            {label}
          </span>
          {icon && iconPosition === EButtonIconPosition.RIGHT && iconMarkup}
        </button>
      );
    } else {
      console.log(`button kind ${kind} is not supported`);
      return null;
    }
  }
};

export default Button;
