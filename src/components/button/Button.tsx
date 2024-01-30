import { difference as _difference } from 'lodash';
import { useMemo } from 'react';

import { Icon } from '../icon/Icon';
import {
  EButtonIconPosition,
  EButtonKinds,
  EButtonSizes,
  EButtonTypes,
} from './button.enum';
import { IButtonComponentProps } from './button.interface';
import btnBase, {
  colors,
  lg,
  md,
  simpleLinkClasses,
  stateDisabled,
} from './button-css';

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
  openInNewTab = false,
  kind = EButtonKinds.BUTTON,
  fitParent = false,
  imageSrc,
}: IButtonComponentProps) => {
  const componentName = 'c-button';

  const topContainerClasses = useMemo(() => {
    let modifier = [...btnBase.topContainer];
    switch (size) {
      case EButtonSizes.LARGE:
        modifier = [...modifier, ...lg.topContainer];
        break;
      case EButtonSizes.MEDIUM:
        modifier = [...modifier, ...md.topContainer];
        break;
      default:
        modifier = [...modifier, ...md.topContainer];
    }

    switch (type) {
      case EButtonTypes.TERTIARY:
        modifier = _difference(
          [
            ...modifier,
            ...colors.tertiary,
            'hover:bg-gradient-pink-violet-3070',
            'active:bg-gradient-pink-violet-2080',
          ],
          ['hover:outline-slate-100', 'active:outline-slate-200'],
        );

        break;
      case EButtonTypes.PRIMARY:
        modifier = [...modifier, ...colors.primary];
        break;
      case EButtonTypes.SECONDARY:
        modifier = _difference(
          [...modifier, ...colors.secondary],
          ['hover:outline-slate-100', 'active:outline-slate-200'],
        );
        break;
      default:
        modifier = [...modifier, ...colors.primary];
    }

    if (disabled) {
      modifier = [...modifier, ...stateDisabled];
      if (type === EButtonTypes.TERTIARY) {
        modifier = [
          ..._difference(modifier, [
            'hover:bg-gradient-pink-violet-3070',
            'active:bg-gradient-pink-violet-2080',
            'bg-gradient-pink-violet-5050',
          ]),
        ];
      }
    }

    if (fitParent) {
      modifier.push('w-full');
    }

    return `${componentName} ${modifier.join(' ')}`;
  }, [type, size, disabled, kind, fitParent]);

  const iconContainerClasses = useMemo(() => {
    let classes: Array<string> = [];
    switch (size) {
      case EButtonSizes.LARGE:
        classes = [...classes, ...lg.iconContainer];
        break;
      case EButtonSizes.MEDIUM:
        classes = [...classes, ...md.iconContainer];
        break;
      default:
        classes = [...classes, ...md.iconContainer];
    }

    return classes.join(' ');
  }, [size]);

  const iconMarkup = useMemo(() => {
    const classesIcon: Array<string> = ['c-button__icon', 'inline-block'];
    switch (size) {
      case EButtonSizes.LARGE:
        classesIcon.push(...lg.iconContainer);
        break;
      case EButtonSizes.MEDIUM:
        classesIcon.push(...md.iconContainer);
        break;
      default:
        classesIcon.push(...md.iconContainer);
    }

    return icon ? (
      <span className={`${classesIcon.join(' ')}`}>
        <Icon type={icon} />
      </span>
    ) : null;
  }, [icon, iconContainerClasses, size]);

  const textContainerMarkup = useMemo(() => {
    const baseClasses = ['c-button__text'];
    if (icon) {
      if (iconPosition === EButtonIconPosition.RIGHT) {
        baseClasses.push('mr-2');
      } else if (iconPosition === EButtonIconPosition.LEFT) {
        baseClasses.push('ml-2');
      } else if (iconPosition === EButtonIconPosition.TOP) {
        baseClasses.push('mt-2');
      }
    }

    switch (kind) {
      case EButtonKinds.BUTTON_AS_LINK:
        baseClasses.push(...simpleLinkClasses.textContainer);
        break;
      case EButtonKinds.BUTTON:
        baseClasses.push(...btnBase.textContainer);
        break;
    }

    return <span className={`${baseClasses.join(' ')}`}>{label}</span>;
  }, [label, iconPosition, icon]);

  if (kind === EButtonKinds.BUTTON_AS_LINK) {
    return (
      <a
        className={topContainerClasses}
        href={href}
        target={openInNewTab ? '_blank' : '_self'}
        aria-label={label}
      >
        {icon &&
          (iconPosition === EButtonIconPosition.LEFT ||
            iconPosition === EButtonIconPosition.TOP) &&
          iconMarkup}

        {!imageSrc && textContainerMarkup}

        {icon && iconPosition === EButtonIconPosition.RIGHT && iconMarkup}
      </a>
    );
  } else if (kind === EButtonKinds.BUTTON) {
    return (
      <button
        aria-label={label}
        className={topContainerClasses}
        onClick={(evt) => {
          if (onClickEvent && typeof onClickEvent === 'function') {
            evt.preventDefault();
            onClickEvent();
          }
        }}
        type="button"
        disabled={disabled}
      >
        {icon &&
          (iconPosition === EButtonIconPosition.LEFT ||
            iconPosition === EButtonIconPosition.TOP) &&
          iconMarkup}

        {textContainerMarkup}

        {icon && iconPosition === EButtonIconPosition.RIGHT && iconMarkup}
      </button>
    );
  } else {
    console.log(`button kind ${kind} is not supported`);
    return null;
  }
};
