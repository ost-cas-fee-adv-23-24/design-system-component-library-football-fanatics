import './button.css';
import { IButtonProps } from './button.interface';
import { EButtonIconPosition, EButtonSizes, EButtonTypes } from './button.enum';
import { useMemo } from 'react';
import Icon from '../icon/icon';
import { EIconSizes } from '../icon/icon.enum';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = EButtonTypes.PRIMARY,
  size = EButtonSizes.MEDIUM,
  iconPosition = EButtonIconPosition.LEFT,
  icon,
  label,
  onClickEvent,
}: IButtonProps) => {
  const componentName = 'c-button';
  const cssClasses = useMemo(() => {
    const modifier = [];
    modifier.push(`${componentName}--${type}`);
    console.log('type changed: ', type);
    return `${componentName} ${modifier.join(' ')}`;
  }, [type, size]);

  const iconSize = useMemo(() => {
    if (size === EButtonSizes.SMALL) {
      return EIconSizes.SM;
    } else if (size === EButtonSizes.MEDIUM) {
      return EIconSizes.MD;
    } else if (size === EButtonSizes.LARGE) {
      return EIconSizes.LG;
    } else {
      // default
      return EIconSizes.MD;
    }
  }, [size]);

  return (
    <div>
      <button className={cssClasses} onClick={onClickEvent} type="button">
        {icon && iconPosition === EButtonIconPosition.LEFT && (
          <Icon type={icon} size={iconSize} />
        )}
        <span className="c-button__text">{label}</span>
        {icon && iconPosition === EButtonIconPosition.RIGHT && (
          <Icon type={icon} size={iconSize} />
        )}
      </button>
    </div>
  );
};
