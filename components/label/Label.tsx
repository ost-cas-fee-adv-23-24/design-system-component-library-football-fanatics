import clsx from 'clsx';
import { LabelHTMLAttributes } from 'react';

export type ILabelProps = {
  size: 'XL' | 'L' | 'M' | 'S';
  text: string;
} & LabelHTMLAttributes<HTMLLabelElement>;

const mapDesign = {
  XL: 'text-2xl not-italic font-semibold leading-none',
  L: 'text-xl not-italic font-semibold leading-none',
  M: 'text-base not-italic font-semibold leading-none',
  S: 'text-sm not-italic font-semibold leading-none',
};

export const Label = ({ text, size, ...labelProps }: ILabelProps) => {
  return (
    <label
      className={clsx('text-current font-poppins', mapDesign[size])}
      aria-hidden="true"
      {...labelProps}
      style={{ cursor: 'inherit' }} // needed to do inline style because tailwindcss doesn't have a cursor-inherit class
    >
      {text}
    </label>
  );
};
