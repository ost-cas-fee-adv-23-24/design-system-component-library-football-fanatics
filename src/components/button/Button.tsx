import { Icon } from '../icon';
import { EButtonSizes, EButtonTypes } from './utils/button.enum';
import { IButtonComponentProps } from './utils/button.interface';

export const Button = ({
  type = EButtonTypes.PRIMARY,
  size = EButtonSizes.MEDIUM,
  icon,
  label,
  onCustomClick,
  href,
  disabled = false,
  openInNewTab = false,
  fitParent = false,
}: IButtonComponentProps) => {
  const typo = 'font-poppins text-base not-italic font-semibold leading-4';
  const layout = 'rounded px-8 flex items-center justify-center';
  const layoutLarge = 'px-6 py-4 text-base';
  const layoutMedium = 'px-3 py-3 text-sm';

  const colorsPrimary = 'bg-slate-600 text-white';
  const hoverStatesPrimary =
    'hover:outline-[3px] hover:outline hover:outline-slate-100';
  const activeStatesPrimary =
    'active:outline-[4px] active:outline active:outline-slate-200';

  const colorsSecondary = 'bg-violet-600 text-white';
  const hoverStatesSecondary =
    'hover:outline-violet-100 hover:outline-violet-200';

  const colorsTertiary = 'bg-gradient-pink-violet-5050 text-white';
  const hoverStatesTertiary =
    'hover:bg-gradient-pink-violet-3070 hover:outline-violet-100';
  const activeStatesTertiary =
    'active:outline-violet-200  active:bg-gradient-pink-violet-2080';

  const disabledStatesCommon =
    'disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-300';

  const disabledStatesTertiary =
    'hover:bg-gradient-pink-violet-3070 active:bg-gradient-pink-violet-2080 bg-gradient-pink-violet-5050';

  let cssClasses;

  if (size === EButtonSizes.LARGE) {
    cssClasses = `${layoutLarge}`;
  } else if (size === EButtonSizes.MEDIUM) {
    cssClasses = `${layoutMedium}`;
  }

  if (type === EButtonTypes.SECONDARY) {
    cssClasses += ` ${colorsSecondary} ${hoverStatesSecondary}`;
  } else if (type === EButtonTypes.TERTIARY) {
    cssClasses += ` ${colorsTertiary} ${hoverStatesTertiary} ${activeStatesTertiary}`;
  } else {
    cssClasses += ` ${hoverStatesPrimary} ${activeStatesPrimary} ${colorsPrimary}`;
  }

  if (disabled) {
    cssClasses += ` ${disabledStatesCommon}`;
    if (type === EButtonTypes.TERTIARY) {
      cssClasses = ` ${disabledStatesTertiary}`;
    }
  }

  if (fitParent) {
    cssClasses += ' w-full';
  }

  const iconMarkup = (
    <span className="inline-block h-4 w-4 leading-none">
      <Icon type={icon} />
    </span>
  );

  const labelMarkup = <span className="mr-2">{label}</span>;

  if (href) {
    return (
      <a
        className={`${typo} ${layout} ${cssClasses}`}
        href={href}
        target={openInNewTab ? '_blank' : '_self'}
        aria-label={label}
      >
        {labelMarkup}

        {iconMarkup}
      </a>
    );
  }
  return (
    <button
      className={`${typo} ${layout} ${cssClasses}`}
      aria-label={label}
      onClick={(evt) => {
        if (onCustomClick && typeof onCustomClick === 'function') {
          evt.preventDefault();
          onCustomClick();
        }
      }}
      type="button"
      disabled={disabled}
    >
      {labelMarkup}

      {iconMarkup}
    </button>
  );
};
