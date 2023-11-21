import clsx from 'clsx';
import { ReactElement } from 'react';

export interface IParagraphProps {
  size: 'L' | 'M';
  children: ReactElement;
  as?: 'p' | 'span';
}

const mapDesign = {
  L: 'text-2xl not-italic font-medium leading-[1.45]',
  M: 'text-lg not-italic font-bold leading-[1.40]',
};

export const Paragraph = ({ children, size, as: ParagraphComponent = 'p' }: IParagraphProps) => {

  return (
    <ParagraphComponent className={clsx('text-slate-600 font-poppins', mapDesign[size])}>
      {children}
    </ParagraphComponent>
  )
};
