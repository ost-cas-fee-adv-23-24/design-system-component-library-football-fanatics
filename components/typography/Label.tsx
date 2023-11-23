import clsx from 'clsx';
import React, { ReactElement } from 'react';

export interface ILabelProps {
  size: 'XL' | 'L' | 'M' | 'S';
  children: ReactElement;
}

const mapDesign = {
  XL: 'text-2xl not-italic font-semibold leading-none',
  L: 'text-xl not-italic font-semibold leading-none',
  M: 'text-base not-italic font-semibold leading-none',
  S: 'text-sm not-italic font-semibold leading-none'
}

export const Label = ({
  children,
  size,
}: ILabelProps) => {

  return (
    <label className={clsx(
      'text-slate-600 font-poppins',
      mapDesign[size],
    )}>
      {children}
    </label>
  )
};



