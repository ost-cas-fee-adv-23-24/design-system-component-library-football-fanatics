import './button.css';
import { IButtonProps } from './button.interface';
import { EButtonIconPosition, EButtonSizes, EButtonTypes } from './button.enum';
import { useMemo } from 'react';
import Icon from '../icon/icon';

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

  return (
    <div>
      {/*ccs will not be loaded if classes are not to find in markup ... ¯\_(ツ)_/¯*/}
      {/*<button className="c-button c-button--primary">*/}
      {/*  <span className="c-button__text">Primary</span>*/}
      {/*</button>*/}
      {/*<button className="c-button c-button--secondary">*/}
      {/*  <span className="c-button__text">Primary</span>*/}
      {/*</button>*/}
      {/*<button className="c-button c-button--tertiary">*/}
      {/*  <span className="c-button__text">Primary</span>*/}
      {/*</button>*/}
      <button className={cssClasses} onClick={onClickEvent} type="button">
        {icon && iconPosition === EButtonIconPosition.LEFT && (
          <span className="c-button__icon">
            <Icon type={icon} />
          </span>
        )}
        <span className="c-button__text">{label}</span>
        {icon && iconPosition === EButtonIconPosition.RIGHT && (
          <span className="c-button__icon">
            <Icon type={icon} />
          </span>
        )}
      </button>
    </div>
  );
};
