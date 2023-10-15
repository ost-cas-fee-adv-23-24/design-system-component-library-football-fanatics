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
  icon = false,
  label,
  onClickEvent,
}: IButtonProps) => {
  const componentName = 'c-button';
  const cssClasses = useMemo(() => {
    const decorators = [type, size].map((decorator) => {
      return `${componentName}--${decorator}`;
    });
    return `${componentName} ${decorators.join(' ')} `;
  }, [type, size]);
  return (
    <button className={cssClasses} onClick={onClickEvent} type="button">
      {label}
    </button>
  );
};
