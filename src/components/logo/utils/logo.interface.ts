import { ELogoPositions,ELogoTypes } from './logo.enum';

export interface ILogoComponentProps {
  logoPosition: ELogoPositions;
  color: ELogoTypes;
  isHeader?: boolean;
}
