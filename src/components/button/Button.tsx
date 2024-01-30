import { Icon } from '../icon/Icon';
import { EButtonSizes, EButtonTypes } from './button.enum';
import { IButtonComponentProps } from './button.interface';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = EButtonTypes.PRIMARY,
  size = EButtonSizes.MEDIUM,
  icon,
  label,
  onClickEvent,
  href,
  disabled = false,
  openInNewTab = false,
  fitParent = false,
}: IButtonComponentProps) => {
  const componentName = 'c-button';
  let cssClasses = 'rounded px-8 flex items-center justify-center'; // base
  cssClasses += ' font-poppins text-base not-italic font-semibold leading-4'; // typo

  if (size === EButtonSizes.LARGE) {
    cssClasses += ' px-6 py-4 text-base';
  } else if (size === EButtonSizes.MEDIUM) {
    cssClasses += ' px-3 py-3 text-sm';
  }

  if (type === EButtonTypes.SECONDARY) {
    cssClasses +=
      ' bg-violet-600 text-white hover:outline-violet-100 hover:outline-violet-200';
  } else if (type === EButtonTypes.TERTIARY) {
    cssClasses +=
      ' bg-gradient-pink-violet-5050 text-white hover:outline-violet-100 active:outline-violet-200 hover:bg-gradient-pink-violet-3070 active:bg-gradient-pink-violet-2080';
  } else {
    cssClasses += ' hover:outline-[3px] hover:outline hover:outline-slate-100'; // hover states
    cssClasses +=
      ' active:outline-[4px] active:outline active:outline-slate-200'; // active states
    cssClasses += ' bg-slate-600 text-white'; // bg and text colors
  }

  if (disabled) {
    cssClasses +=
      ' disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-300';
    if (type === EButtonTypes.TERTIARY) {
      cssClasses =
        ' hover:bg-gradient-pink-violet-3070 active:bg-gradient-pink-violet-2080 bg-gradient-pink-violet-5050';
    }
  }

  if (fitParent) {
    cssClasses += ' w-full';
  }

  if (href) {
    return (
      <a
        className={cssClasses}
        href={href}
        target={openInNewTab ? '_blank' : '_self'}
        aria-label={label}
      >
        <span className="mr-2">{label}</span>

        <span
          className={`inline-block ${
            EButtonSizes.LARGE ? 'h-4 w-4 leading-none' : 'h-4 w-4 leading-none'
          }`}
        >
          <Icon type={icon} />
        </span>
      </a>
    );
  }
  return (
    <button
      className={cssClasses}
      aria-label={label}
      onClick={(evt) => {
        if (onClickEvent && typeof onClickEvent === 'function') {
          evt.preventDefault();
          onClickEvent();
        }
      }}
      type="button"
      disabled={disabled}
    >
      <span className="mr-2">{label}</span>

      <span
        className={`inline-block ${
          EButtonSizes.LARGE ? 'h-4 w-4 leading-none' : 'h-4 w-4 leading-none'
        }`}
      >
        <Icon type={icon} />
      </span>
    </button>
  );
};
