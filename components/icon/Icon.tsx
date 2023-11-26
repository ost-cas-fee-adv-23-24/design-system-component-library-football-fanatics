/**
 * Author: bladimirardiles
 * Component File Name: icon.js
 * Component Name: icon
 * Project: design-system-component-library-football-fanatics
 * Date: Mon 16/10/2023 - 13:14
 */

import React, { useMemo } from 'react';
import './icon.css';
import { EIConTypes } from './icon.enum';
import { IIconProps } from './icon.interface';
import mumbleIcon from './svg/mumble';
import arrowLeftIcon from './svg/arrow-left';
import arrowRightIcon from './svg/arrow-right';
import arrowUpIcon from './svg/arrow-up';
import arrowDownIcon from './svg/arrow-down';
import calendarIcon from './svg/calendar';
import cancelIcon from './svg/cancel';
import checkmarkIcon from './svg/checkmark';
import commentBorderedIcon from './svg/comment-bordered';
import commentFilledIcon from './svg/comment-filled';
import editIcon from './svg/edit';
import eyeIcon from './svg/eye';
import fullScreenIcon from './svg/full-screen';
import heardBorderedIcon from './svg/heart-bordered';
import heartFilledIcon from './svg/heart-filled';
import locationIcon from './svg/location';
import logoutIcon from './svg/logout';
import profileIcon from './svg/profile';
import repostIcon from './svg/repost';
import sendIcon from './svg/send';
import settingsIcon from './svg/settings';
import shareIcon from './svg/share';
import timeIcon from './svg/time';
import uploadIcon from './svg/upload';
import { fitParent, topContainer } from './css';

const Icon = ({ type, color }: IIconProps) => {
  const componentName = 'c-icon';
  const cssClasses = useMemo(() => {
    const decorations = [...topContainer, ...fitParent];

    if (color) {
      decorations.push(`text-${color}-500`);
    } else {
      decorations.push(`text-inherit`);
    }

    return `${componentName} ${decorations.join(' ')} `;
  }, [color]);
  const iconMarkup = useMemo(() => {
    switch (type) {
      case EIConTypes.MUMBLE:
        return mumbleIcon;
      case EIConTypes.ARROW_LEFT:
        return arrowLeftIcon;
      case EIConTypes.ARROW_RIGHT:
        return arrowRightIcon;
      case EIConTypes.ARROW_DOWN:
        return arrowDownIcon;
      case EIConTypes.ARROW_UP:
        return arrowUpIcon;
      case EIConTypes.CALENDAR:
        return calendarIcon;
      case EIConTypes.CANCEL:
        return cancelIcon;
      case EIConTypes.CHECKMARK:
        return checkmarkIcon;
      case EIConTypes.COMMENT_BORDERED:
        return commentBorderedIcon;
      case EIConTypes.COMMENT_FILLED:
        return commentFilledIcon;
      case EIConTypes.EDIT:
        return editIcon;
      case EIConTypes.EYE:
        return eyeIcon;
      case EIConTypes.FULL_SCREEN:
        return fullScreenIcon;
      case EIConTypes.HEART_BORDERED:
        return heardBorderedIcon;
      case EIConTypes.HEART_FILLED:
        return heartFilledIcon;
      case EIConTypes.LOCATION:
        return locationIcon;
      case EIConTypes.LOGOUT:
        return logoutIcon;
      case EIConTypes.PROFILE:
        return profileIcon;
      case EIConTypes.REPOST:
        return repostIcon;
      case EIConTypes.SEND:
        return sendIcon;
      case EIConTypes.SETTINGS:
        return settingsIcon;
      case EIConTypes.SHARE:
        return shareIcon;
      case EIConTypes.TIME:
        return timeIcon;
      case EIConTypes.UPLOAD:
        return uploadIcon;
    }
  }, [type]);

  return (
    <div
      className={cssClasses}
      dangerouslySetInnerHTML={{ __html: iconMarkup }}
    ></div>
  );
};

export default Icon;
