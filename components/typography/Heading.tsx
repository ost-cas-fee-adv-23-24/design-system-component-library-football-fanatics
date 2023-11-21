import clsx from 'clsx';
import { ReactElement } from 'react';

export interface ITypographyProps {
  level: '1' | '2' | '3' | '4';
  children: ReactElement;
}

const mapDesign = {
  '1': 'text-5xl not-italic font-bold leading-tight',
  '2': 'text-[40px] not-italic font-bold leading-tight',
  '3': 'text-[32px] not-italic font-semibold ',
  '4': 'text-2xl not-italic font-semibold leading-tight'
}

export const Heading = ({
  children,
  level,
}: ITypographyProps) => {
  const HeadingComponent = `h${level}`;

  return (
    <HeadingComponent className={clsx(
      'text-slate-600 font-poppins',
      mapDesign[level],
    )}>
      {children}
    </HeadingComponent>
  )
};



