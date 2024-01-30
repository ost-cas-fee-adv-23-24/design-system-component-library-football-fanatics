import { ELogoColors, ELogoPositions } from './logo.enum';

export interface ILogoComponentProps {
  logoPosition: ELogoPositions.TOP | ELogoPositions.LEFT;
  color: ELogoColors.GRADIENT | ELogoColors.VIOLET | ELogoColors.WHITE;
}
