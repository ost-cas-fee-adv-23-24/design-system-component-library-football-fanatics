import './button.css';
import { IButtonProps } from './button.interface';
import { EButtonIconPosition, EButtonSizes, EButtonTypes } from './button.enum';
import { useMemo } from 'react';
import Icon from '../icon/Icon';

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
}: IButtonProps) => {
  const componentName = 'c-button';
  const cssClasses = useMemo(() => {
    const availableClasses = {
      sizeBig: 'c-button--lg',
      sizeMedium: 'c-button--md',
      sizeSmall: 'c-button--sm',
      typePrimary: 'c-button--primary',
      typeSecondary: 'c-button--secondary',
      typeTertiary: 'c-button--tertiary',
    };
    const modifier = [];
    switch (size) {
      case EButtonSizes.LARGE:
        modifier.push(availableClasses.sizeBig);
        break;
      case EButtonSizes.MEDIUM:
        modifier.push(availableClasses.sizeMedium);
        break;
      case EButtonSizes.SMALL:
        modifier.push(availableClasses.sizeSmall);
        break;
      default:
        modifier.push(availableClasses.sizeMedium);
    }

    switch (type) {
      case EButtonTypes.PRIMARY:
        modifier.push(availableClasses.typePrimary);
        break;
      case EButtonTypes.SECONDARY:
        modifier.push(availableClasses.typeSecondary);
        break;
      case EButtonTypes.TERTIARY:
        modifier.push(availableClasses.typeTertiary);
        break;
      default:
        modifier.push(availableClasses.typePrimary);
    }

    return `${componentName} ${modifier.join(' ')}`;
  }, [type, size]);

  const iconMarkup = useMemo(() => {
    return icon ? (
      <span className="c-button__icon">
        <Icon type={icon} />
      </span>
    ) : null;
  }, [icon]);

  if (href) {
    return (
      <a className={cssClasses} href={href} target="_blank">
        {icon && iconPosition === EButtonIconPosition.LEFT && iconMarkup}
        <span className="c-button__text">{label}</span>
        {icon && iconPosition === EButtonIconPosition.RIGHT && iconMarkup}
      </a>
    );
  } else {
    return (
      <button
        className={cssClasses}
        onClick={onClickEvent}
        type="button"
        disabled={disabled}
      >
        {icon && iconPosition === EButtonIconPosition.LEFT && iconMarkup}
        <span className="c-button__text">{label}</span>
        {icon && iconPosition === EButtonIconPosition.RIGHT && iconMarkup}
      </button>
    );
  }
};

export default Button;
