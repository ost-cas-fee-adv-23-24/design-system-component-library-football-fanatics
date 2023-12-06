import { IButtonComponentProps } from './button.interface';
import {
  EButtonIconPosition,
  EButtonKinds,
  EButtonSizes,
  EButtonTypes,
} from './button.enum';
import { useMemo, useState } from 'react';
import Icon from '../icon/Icon';
import btnBase, {
  colors,
  copyToClipboardClasses,
  lg,
  md,
  onlyIconCss,
  simpleLinkClasses,
  stateActive,
  stateDisabled,
  statesHover,
} from './button-css';
import { difference as _difference } from 'lodash';
import { iconButtonGray, iconButtonViolet } from './icon-button.css';
import { iconButtonMenu } from './buttonicon-menu';

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
  clipboardData,
  clipboardHighlightDelay = 1500,
  clipboardCopySuccessLabel = 'Link copied',
  clipboardCopyErrorLabel = 'Link not copied',
}: IButtonComponentProps) => {
  const componentName = 'c-button';
  const [highlighted, setHighlighted] = useState(false);
  const [labelText, setLabelText] = useState(label);

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
      default:
        modifierIconClasses = [...modifierIconClasses, ...md.iconContainer];
    }

    if (disabled) {
      modifierIconClasses = [
        ...modifierIconClasses,
        ...onlyIconCss.disabledState,
      ];
    }

    return `${modifierIconClasses.join(' ')}`;
  }, [onlyIcon, size, type, disabled]);

  const topContainerClasses = useMemo(() => {
    if (kind === EButtonKinds.LINK) {
      return `${componentName} ${simpleLinkClasses.topContainer.join(' ')} ${
        disabled ? ' pointer-events-none' : ''
      }`;
    }

    if (kind === EButtonKinds.BUTTON_ICON) {
      if (type === EButtonTypes.PRIMARY) {
        return `${componentName} ${iconButtonViolet.topContainer.join(' ')} ${
          disabled ? ' pointer-events-none' : ''
        }`;
      }
      if (type === EButtonTypes.SECONDARY) {
        return `${componentName} ${iconButtonGray.topContainer.join(' ')} ${
          disabled ? ' pointer-events-none' : ''
        }`;
      }
    }

    if (kind === EButtonKinds.BUTTON_ICON_MENU) {
      return `${componentName} ${iconButtonMenu.topContainer.join(' ')} ${
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
      default:
        modifier = [...modifier, ...md.topContainer];
    }

    if (kind === EButtonKinds.COPY_TO_CLIPBOARD) {
      modifier = [
        ..._difference(modifier, [
          'bg-gray-100',
          'text-white',
          'rounded',
          ...stateActive,
          ...statesHover,
        ]),
        ...copyToClipboardClasses.topContainer,
      ];

      if (highlighted) {
        modifier = [
          'bg-gray-200',
          ..._difference(modifier, ['hover:bg-slate-100']),
        ];
      }

      return `${componentName} ${modifier.join(' ')}`;
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

    return `${componentName} ${modifier.join(' ')}`;
  }, [type, size, disabled, kind, highlighted]);

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
    return icon ? (
      <span className={`c-button__icon inline-block ${iconContainerClasses}`}>
        <Icon type={icon} />
      </span>
    ) : null;
  }, [icon, iconContainerClasses]);

  const iconMargins = useMemo(() => {
    if (icon) {
      if (iconPosition === EButtonIconPosition.RIGHT) {
        return 'mr-2';
      } else if (iconPosition === EButtonIconPosition.LEFT) {
        return 'ml-2';
      } else if (iconPosition === EButtonIconPosition.TOP) {
        return '';
      } else {
        return '';
      }
    }
    return '';
  }, [iconPosition, icon]);

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
      return (
        <button
          aria-label={label}
          className={topContainerOnlyIcon}
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
            )} ${iconMargins}`}
          >
            {label}
          </span>
          {icon && iconPosition === EButtonIconPosition.RIGHT && iconMarkup}
        </a>
      );
    } else if (
      kind === EButtonKinds.BUTTON_ICON ||
      kind === EButtonKinds.BUTTON ||
      kind === EButtonKinds.COPY_TO_CLIPBOARD ||
      kind === EButtonKinds.BUTTON_ICON_MENU
    ) {
      return (
        <button
          aria-label={label}
          className={topContainerClasses}
          onClick={(evt) => {
            if (kind === EButtonKinds.COPY_TO_CLIPBOARD) {
              if (clipboardData) {
                navigator.clipboard
                  .writeText(clipboardData)
                  .then(() => {
                    setHighlighted(true);
                    setLabelText(clipboardCopySuccessLabel);
                    setTimeout(() => {
                      setLabelText(label);
                      setHighlighted(false);
                    }, clipboardHighlightDelay);
                  })
                  .catch(() => {
                    setLabelText(clipboardCopyErrorLabel);
                    setTimeout(() => {
                      setLabelText(label);
                    }, clipboardHighlightDelay);
                  });
              } else {
                setLabelText('No data to copy');
                setTimeout(() => {
                  setLabelText(label);
                }, clipboardHighlightDelay);
              }
            } else {
              if (onClickEvent && typeof onClickEvent === 'function') {
                evt.preventDefault();
                onClickEvent();
              }
            }
          }}
          type="button"
          disabled={disabled}
        >
          {icon &&
            (iconPosition === EButtonIconPosition.LEFT ||
              iconPosition === EButtonIconPosition.TOP) &&
            iconMarkup}

          {(() => {
            let cssClassesText = ['c-button__text'];
            if (kind === EButtonKinds.BUTTON_ICON_MENU) {
              cssClassesText = [
                ...cssClassesText,
                ...iconButtonMenu.textContainer,
              ];
            } else {
              cssClassesText = [
                ...cssClassesText,
                ...btnBase.textContainer,
                iconMargins,
              ];
            }
            return (
              <span className={`${cssClassesText.join(' ')}`}>{labelText}</span>
            );
          })()}

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
            )} ${iconMargins}`}
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
