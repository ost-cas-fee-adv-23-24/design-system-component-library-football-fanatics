'use server';
import clsx from 'clsx';

import { ELabelSize } from './utils/label.enum';
import { ILabelProps } from './utils/label.interface';

const mapDesign = {
  [ELabelSize.XL]: 'text-2xl not-italic font-semibold leading-none',
  [ELabelSize.L]: 'text-xl not-italic font-semibold leading-none',
  [ELabelSize.M]: 'text-base not-italic font-semibold leading-none',
  [ELabelSize.S]: 'text-sm not-italic font-semibold leading-none',
};

export const Label = ({ text, size, htmlFor }: ILabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx('text-current font-poppins', mapDesign[size])}
      aria-hidden="true"
      style={{ cursor: 'inherit' }} // needed to do inline style because tailwindcss doesn't have a cursor-inherit class
    >
      {text}
    </label>
  );
};
