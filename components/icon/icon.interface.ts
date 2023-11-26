import { EIconColors, EIconSizes, EIConTypes } from './icon.enum';

export interface IIconProps {
  type:
    | EIConTypes.ARROW_DOWN
    | EIConTypes.ARROW_LEFT
    | EIConTypes.ARROW_RIGHT
    | EIConTypes.ARROW_UP
    | EIConTypes.MUMBLE
    | EIConTypes.CALENDAR
    | EIConTypes.CANCEL
    | EIConTypes.CHECKMARK
    | EIConTypes.COMMENT_BORDERED
    | EIConTypes.COMMENT_FILLED
    | EIConTypes.EDIT
    | EIConTypes.EYE
    | EIConTypes.FULL_SCREEN
    | EIConTypes.HEART_BORDERED
    | EIConTypes.HEART_FILLED
    | EIConTypes.LOCATION
    | EIConTypes.LOGOUT
    | EIConTypes.PROFILE
    | EIConTypes.REPOST
    | EIConTypes.SEND
    | EIConTypes.SETTINGS
    | EIConTypes.SHARE
    | EIConTypes.TIME
    | EIConTypes.UPLOAD;
  color?: EIconColors.PRIMARY | EIconColors.SECONDARY;
  size?: EIconSizes.LG | EIconSizes.MD | EIconSizes.SM;
}
