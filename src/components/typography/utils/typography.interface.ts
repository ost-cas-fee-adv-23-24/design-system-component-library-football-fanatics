import {
  EParagraphSizes,
  EParagraphTypes,
  ETypographyLevels,
} from './typography.enum';

export interface ITypographyProps {
  level: ETypographyLevels;
  text: string;
  inheritColor?: boolean;
}

export interface IParagraphProps {
  size: EParagraphSizes;
  text: string;
  as?: EParagraphTypes;
  inheritColor?: boolean;
}
