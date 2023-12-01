/**
 * Author: bladimirardiles
 * Component File Name: Toggle.js
 * Component Name: Toggle
 * Project: design-system
 * Date: Fri 01/12/2023 - 18:39
 */

import React, { useCallback, useMemo, useState } from 'react';
import { EToggleKinds } from './toggle.enums';
import {
  commentModifiers,
  commentStates,
  likeModifiers,
  likeStates,
  toggleBase,
} from './css';
import { EIConTypes } from '../icon/icon.enum';
import Icon from '../icon/Icon';
import { IToggleComponentProps } from './toggle.interfaces';

const Toggle = ({
  label,
  amount,
  kind = EToggleKinds.LIKE,
}: IToggleComponentProps) => {
  // amount States only for the presentation. this should be a dumb component
  // story book does not re-render in case of change of state of the component ¯\_(ツ)_/¯
  const [amountState, setAmountState] = useState(amount);
  const [labelState, setLabelState] = useState(label);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const componentName = 'c-toggle';
  const cssClasses = useMemo(() => {
    let modifiers = [componentName, ...toggleBase.topContainer];
    switch (kind) {
      case EToggleKinds.LIKE:
        modifiers = [...modifiers, ...likeModifiers.topContainer];
        if (amountState && amountState > 0) {
          modifiers = [...modifiers, ...likeStates.active.topContainer];
        }
        break;
      case EToggleKinds.COMMENT:
        modifiers = [...modifiers, ...commentModifiers.topContainer];
        if (amountState && amountState > 0) {
          modifiers = [...modifiers, ...commentStates.active.topContainer];
        }
        break;
      default:
        modifiers = [...modifiers];
    }

    return modifiers.join(' ');
  }, [kind, amountState]);

  const iconMarkup = useCallback(
    (hover: boolean) => {
      let iconType = EIConTypes.HEART_BORDERED;
      let iconModifiers = ['c-toggle__icon', ...toggleBase.iconContainer];

      if (kind === EToggleKinds.LIKE) {
        if (clicked) {
          iconType = EIConTypes.HEART_FILLED;
        } else if (amountState && amountState > 0) {
          iconType = EIConTypes.HEART_FILLED;
          iconModifiers = [
            ...iconModifiers,
            ...likeStates.active.iconContainer,
          ];
        } else {
          iconType = EIConTypes.HEART_BORDERED;
        }

        if (hover) {
          iconModifiers = [...iconModifiers, ...likeStates.hover.iconContainer];
        }
      } else if (kind === EToggleKinds.COMMENT) {
        // no click state
        if (amountState && amountState > 0) {
          iconType = EIConTypes.COMMENT_FILLED;
          iconModifiers = [
            ...iconModifiers,
            ...commentStates.active.iconContainer,
          ];
        } else {
          iconType = EIConTypes.COMMENT_BORDERED;
        }

        if (hover) {
          iconModifiers = [
            ...iconModifiers,
            ...commentStates.hover.iconContainer,
          ];
        }
      }

      return (
        <span className={iconModifiers.join(' ')}>
          <Icon type={iconType} />
        </span>
      );
    },
    [kind, amountState, clicked],
  );

  return (
    <button
      className={cssClasses}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onMouseDown={() => {
        setClicked(true);
        if (kind === EToggleKinds.LIKE) {
          setLabelState('Liked');
        }
      }}
      onMouseUp={() => {
        setClicked(false);
        if (kind === EToggleKinds.LIKE) {
          setLabelState(amountState && amountState + 1 > 1 ? 'Likes' : 'Like');
        }
      }}
      onClick={() => {
        if (kind === EToggleKinds.LIKE) {
          setAmountState(amountState ? amountState + 1 : 1);
        }
      }}
    >
      {iconMarkup(hover)}
      <span className="c-toggle__text">
        {kind === EToggleKinds.COMMENT && `${amountState ? amountState : ''} `}
        {kind === EToggleKinds.LIKE &&
        !clicked &&
        amountState &&
        amountState > 0
          ? `${amountState} `
          : null}
        {labelState}
      </span>
    </button>
  );
};

export default Toggle;
