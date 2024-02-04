import { EParagraphSizes, EParagraphTypes } from './utils/typography.enum';
import { IParagraphProps } from './utils/typography.interface';

export const Paragraph = ({
  text,
  size,
  as: ParagraphComponent = EParagraphTypes.PARAGRAPH,
}: IParagraphProps) => {
  let cssClasses = 'text-slate-600 font-poppins not-italic';
  const largeDefinitions = ' text-2xl font-medium leading-[1.45]';
  const mediumDefinitions = ' text-lg font-bold leading-[1.40]';

  if (size === EParagraphSizes.LARGE) {
    cssClasses += largeDefinitions;
  } else if (size === EParagraphSizes.MEDIUM) {
    cssClasses += mediumDefinitions;
  }

  return <ParagraphComponent className={cssClasses}>{text}</ParagraphComponent>;
};
