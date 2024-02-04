import { ETypographyLevels } from './typography.enum';

export interface ITypographyProps {
  level: ETypographyLevels;
  text: string;
  inheritColor?: boolean;
}
