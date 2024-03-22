import { EParagraphSizes, EParagraphTypes } from './utils/typography.enum';
import { IParagraphProps } from './utils/typography.interface';

export const Paragraph = ({
  text,
  size,
  as: ParagraphComponent = EParagraphTypes.PARAGRAPH,
  inheritColor = false,
}: IParagraphProps) => {
  let cssClasses = `${inheritColor ? 'text-inherit' : 'text-slate-600'} font-poppins not-italic font-medium`;
  const largeDefinitions = ' text-2xl leading-[1.45]';
  const mediumDefinitions = ' text-lg leading-[1.40]';

  if (size === EParagraphSizes.LARGE) {
    cssClasses += largeDefinitions;
  } else if (size === EParagraphSizes.MEDIUM) {
    cssClasses += mediumDefinitions;
  }

  return <ParagraphComponent className={cssClasses}>{text}</ParagraphComponent>;
};
