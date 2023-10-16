import './button.css';
import { IButtonProps } from './button.interface';
import { EButtonIconPosition, EButtonSizes, EButtonTypes } from './button.enum';
import { useMemo } from 'react';

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

    return `${componentName} ${modifier.join(' ')} `;
  }, [type, size]);
  return (
    <button className={cssClasses} onClick={onClickEvent} type="button">
      {icon && iconPosition === EButtonIconPosition.LEFT && (
        <span className="c-button__icon">{icon}</span>
      )}
      <span className="c-button__text">{label}</span>
      {icon && iconPosition === EButtonIconPosition.RIGHT && (
        <span className="c-button__icon">{icon}</span>
      )}
    </button>
  );
};
