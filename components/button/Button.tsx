import './button.css';
import { IButtonProps } from './button.interface';
import { EButtonIconPosition, EButtonSizes, EButtonTypes } from './button.enum';
import { useMemo } from 'react';
import Icon from '../icon/Icon';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
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
    const modifier = [];
    modifier.push(`${componentName}--${type}`);

    if (size) {
      modifier.push(`${componentName}--${size}`);
    } else {
      modifier.push(`${componentName}--${EButtonSizes.MEDIUM}`);
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
        {/*ccs will not be loaded if classes are not to find in markup ... ¯\_(ツ)_/¯*/}
        {/*<button className="c-button c-button--primary c-button--sm">*/}
        {/*  <span className="c-button__text">Primary</span>*/}
        {/*</button>*/}
        {/*<button className="c-button c-button--secondary c-button--md">*/}
        {/*  <span className="c-button__text">Primary</span>*/}
        {/*</button>*/}
        {/*<button className="c-button c-button--tertiary c-button--lg">*/}
        {/*  <span className="c-button__text">Primary</span>*/}
        {/*</button>*/}
      </button>
    );
  }
};
