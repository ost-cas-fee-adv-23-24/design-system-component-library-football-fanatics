import { IButtonProps } from './button.interface';
import {
  EButtonIconPosition,
  EButtonKinds,
  EButtonSizes,
  EButtonTypes,
} from './button.enum';
import { useMemo } from 'react';
import Icon from '../icon/Icon';
import btnBase, {
  colors,
  lg,
  md,
  onlyIconCss,
  simpleLinkClasses,
  sm,
} from './css';

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
  openInNewTab = false,
  kind = EButtonKinds.BUTTON,
}: IButtonProps) => {
  const componentName = 'c-button';

  const topContainerOnlyIcon = useMemo(() => {
    if (!onlyIcon) return '';

    let modifierIconClasses = [componentName, ...onlyIconCss.topContainer];
    switch (type) {
      case EButtonTypes.TERTIARY:
        modifierIconClasses = [
          ...modifierIconClasses,
          ...colors.tertiary,
          'hover:bg-gradient-pink-violet-3070',
          'active:bg-gradient-pink-violet-2080',
        ];
        break;
      case EButtonTypes.PRIMARY:
        modifierIconClasses = [...modifierIconClasses, ...colors.primary];
        break;
      case EButtonTypes.SECONDARY:
        modifierIconClasses = [...modifierIconClasses, ...colors.secondary];
        break;
      default:
        modifierIconClasses = [...modifierIconClasses, ...colors.primary];
    }

    // size is not expected to be changed. Only MD to be used as default
    // if this changes, then we would need to set a separate onlyIcons.iconContainer.[size] with
    // the needed values
    switch (size) {
      case EButtonSizes.LARGE:
        modifierIconClasses = [...modifierIconClasses, ...lg.iconContainer];
        break;
      case EButtonSizes.MEDIUM:
        modifierIconClasses = [...modifierIconClasses, ...md.iconContainer];
        break;
      case EButtonSizes.SMALL:
        modifierIconClasses = [...modifierIconClasses, ...sm.iconContainer];
        break;
      default:
        modifierIconClasses = [...modifierIconClasses, ...md.iconContainer];
    }

    return `${modifierIconClasses.join(' ')}`;
  }, [onlyIcon, size, type]);

  const topContainerClasses = useMemo(() => {
    if (kind === EButtonKinds.LINK) {
      return `${componentName} ${simpleLinkClasses.topContainer.join(' ')} ${
        disabled ? ' pointer-events-none' : ''
      }`;
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
  }, [type, size, disabled, kind]);

  const iconContainerClasses = useMemo(() => {
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

    return classes.join(' ');
  }, [size]);

  const iconMarkup = useMemo(() => {
    return icon ? (
      <span className={`c-button__icon inline-block ${iconContainerClasses}`}>
        <Icon type={icon} />
      </span>
    ) : null;
  }, [icon, iconContainerClasses]);

  if (onlyIcon) {
    if (kind === EButtonKinds.LINK) {
      return (
        <a
          className={`${topContainerOnlyIcon}`}
          href={href}
          target={openInNewTab ? '_blank' : '_self'}
          title={label}
          aria-label={label}
        >
          {iconMarkup}
        </a>
      );
    } else if (kind === EButtonKinds.BUTTON) {
      const disabledClasses = disabled
        ? onlyIconCss.disabledState.join(' ')
        : '';
      return (
        <button
          aria-label={label}
          className={`${topContainerOnlyIcon} ${disabledClasses}`}
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
    if (kind === EButtonKinds.BUTTON_AS_LINK) {
      return (
        <a
          className={topContainerClasses}
          href={href}
          target={openInNewTab ? '_blank' : '_self'}
          aria-label={label}
        >
          {icon && iconPosition === EButtonIconPosition.LEFT && iconMarkup}
          <span
            className={`c-button__text ${simpleLinkClasses.textContainer.join(
              ' ',
            )}`}
          >
            {label}
          </span>
          {icon && iconPosition === EButtonIconPosition.RIGHT && iconMarkup}
        </a>
      );
    } else if (kind === EButtonKinds.BUTTON) {
      return (
        <button
          aria-label={label}
          className={`${topContainerClasses} ${
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
    } else if (kind === EButtonKinds.LINK) {
      return (
        <a
          className={topContainerClasses}
          href={href}
          target={openInNewTab ? '_blank' : '_self'}
          aria-label={label}
        >
          {icon && iconPosition === EButtonIconPosition.LEFT && iconMarkup}
          <span
            className={`c-button__text ${simpleLinkClasses.textContainer.join(
              ' ',
            )} ${
              icon && iconPosition === EButtonIconPosition.RIGHT ? 'mr-2' : ''
            } ${
              icon && iconPosition === EButtonIconPosition.LEFT ? 'ml-2' : ''
            }`}
          >
            {label}
          </span>
          {icon && iconPosition === EButtonIconPosition.RIGHT && iconMarkup}
        </a>
      );
    } else {
      console.log(`button kind ${kind} is not supported`);
      return null;
    }
  }
};

export default Button;
