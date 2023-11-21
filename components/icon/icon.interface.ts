import { EIconColors, EIconSizes, EIConTypes } from './icon.enum';

export interface IIconProps {
  type:
    | EIConTypes.ARROW_DOWN
    | EIConTypes.ARROW_LEFT
    | EIConTypes.ARROW_RIGHT
    | EIConTypes.ARROW_UP;
  color?: EIconColors.PRIMARY | EIconColors.SECONDARY;
  size?: EIconSizes.LG | EIconSizes.MD | EIconSizes.SM;
}
