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
import MumbleIcon from './svg/mumble.svg';
import ArrowLeftIcon from './svg/arrow-left.svg';
import ArrowRightIcon from './svg/arrow-right.svg';
import ArrowUpIcon from './svg/arrow-up.svg';
import ArrowDownIcon from './svg/arrow-down.svg';
import CalendarIcon from './svg/calendar.svg';
import CancelIcon from './svg/cancel.svg';
import CheckmarkIcon from './svg/checkmark.svg';
import CommentBorderedIcon from './svg/comment-bordered.svg';
import CommentFilledIcon from './svg/comment-filled.svg';
import EditIcon from './svg/edit.svg';
import EyeIcon from './svg/eye.svg';
import FullScreenIcon from './svg/full-screen.svg';
import HeardBorderedIcon from './svg/heart-bordered.svg';
import HeartFilledIcon from './svg/heart-filled.svg';
import LocationIcon from './svg/location.svg';
import LogoutIcon from './svg/logout.svg';
import ProfileIcon from './svg/profile.svg';
import RepostIcon from './svg/repost.svg';
import SendIcon from './svg/send.svg';
import SettingsIcon from './svg/settings.svg';
import ShareIcon from './svg/share.svg';
import TimeIcon from './svg/time.svg';
import UploadIcon from './svg/upload.svg';

const Icon = ({ type, size, color }: IIconProps) => {
  const componentName = 'c-icon';
  const cssClasses = useMemo(() => {
    const decorations = [];
    if (size) {
      decorations.push(`h-${size}`);
      decorations.push(`w-${size}`);
    } else {
      decorations.push(`c-icon--fit-parent`);
    }

    if (color) {
      decorations.push(`text-${color}-500`);
    } else {
      decorations.push(`text-inherit`);
    }

    return `${componentName} ${decorations.join(' ')} `;
  }, [size]);
  const iconMarkup = useMemo(() => {
    switch (type) {
      case EIConTypes.MUMBLE:
        return <MumbleIcon />;
      case EIConTypes.ARROW_LEFT:
        return <ArrowLeftIcon />;
      case EIConTypes.ARROW_RIGHT:
        return <ArrowRightIcon />;
      case EIConTypes.ARROW_DOWN:
        return <ArrowDownIcon />;
      case EIConTypes.ARROW_UP:
        return <ArrowUpIcon />;
      case EIConTypes.CALENDAR:
        return <CalendarIcon />;
      case EIConTypes.CANCEL:
        return <CancelIcon />;
      case EIConTypes.CHECKMARK:
        return <CheckmarkIcon />;
      case EIConTypes.COMMENT_BORDERED:
        return <CommentBorderedIcon />;
      case EIConTypes.COMMENT_FILLED:
        return <CommentFilledIcon />;
      case EIConTypes.EDIT:
        return <EditIcon />;
      case EIConTypes.EYE:
        return <EyeIcon />;
      case EIConTypes.FULL_SCREEN:
        return <FullScreenIcon />;
      case EIConTypes.HEART_BORDERED:
        return <HeardBorderedIcon />;
      case EIConTypes.HEART_FILLED:
        return <HeartFilledIcon />;
      case EIConTypes.LOCATION:
        return <LocationIcon />;
      case EIConTypes.LOGOUT:
        return <LogoutIcon />;
      case EIConTypes.PROFILE:
        return <ProfileIcon />;
      case EIConTypes.REPOST:
        return <RepostIcon />;
      case EIConTypes.SEND:
        return <SendIcon />;
      case EIConTypes.SETTINGS:
        return <SettingsIcon />;
      case EIConTypes.SHARE:
        return <ShareIcon />;
      case EIConTypes.TIME:
        return <TimeIcon />;
      case EIConTypes.UPLOAD:
        return <UploadIcon />;
    }
  }, [type]);

  return <div className={cssClasses}>{iconMarkup}</div>;
};

export default Icon;
