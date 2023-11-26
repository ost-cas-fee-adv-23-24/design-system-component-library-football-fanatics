import clsx from 'clsx';
import React from 'react';

export interface ILabelProps {
  size: 'XL' | 'L' | 'M' | 'S';
  text: string;
}

const mapDesign = {
  XL: 'text-2xl not-italic font-semibold leading-none',
  L: 'text-xl not-italic font-semibold leading-none',
  M: 'text-base not-italic font-semibold leading-none',
  S: 'text-sm not-italic font-semibold leading-none',
};

export const Label = ({ text, size }: ILabelProps) => {
  return (
    <label
      className={clsx('text-slate-600 font-poppins', mapDesign[size])}
      aria-hidden="true"
    >
      {text}
    </label>
  );
};
