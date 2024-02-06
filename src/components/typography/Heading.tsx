import clsx from 'clsx';

import { ETypographyLevels } from './utils/typography.enum';
import { ITypographyProps } from './utils/typography.interface';

const mapDesign = {
  [ETypographyLevels.ONE]: 'text-5xl not-italic font-bold leading-tight',
  [ETypographyLevels.TWO]: 'text-[40px] not-italic font-bold leading-tight',
  [ETypographyLevels.THREE]: 'text-[32px] not-italic font-semibold ',
  [ETypographyLevels.FOUR]: 'text-2xl not-italic font-semibold leading-tight',
};

export const Heading = ({
  text,
  level,
  inheritColor = false,
}: ITypographyProps) => {
  const baseTypo = `${
    inheritColor ? 'text-inherit' : 'text-slate-600'
  } font-poppins`;

  switch (level) {
    case ETypographyLevels.ONE:
      return (
        <h1 className={clsx(baseTypo, mapDesign[ETypographyLevels.ONE])}>
          {text}
        </h1>
      );
    case ETypographyLevels.TWO:
      return (
        <h2 className={clsx(baseTypo, mapDesign[ETypographyLevels.TWO])}>
          {text}
        </h2>
      );
    case ETypographyLevels.THREE:
      return (
        <h3 className={clsx(baseTypo, mapDesign[ETypographyLevels.THREE])}>
          {text}
        </h3>
      );
    case ETypographyLevels.FOUR:
      return (
        <h4 className={clsx(baseTypo, mapDesign[ETypographyLevels.FOUR])}>
          {text}
        </h4>
      );
    default:
      console.log('Heading level not found');
      return null;
  }
};
