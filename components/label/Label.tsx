import clsx from 'clsx';

export type ILabelProps = {
  size: 'XL' | 'L' | 'M' | 'S';
  text: string;
};

const mapDesign = {
  XL: 'text-2xl not-italic font-semibold leading-none',
  L: 'text-xl not-italic font-semibold leading-none',
  M: 'text-base not-italic font-semibold leading-none',
  S: 'text-sm not-italic font-semibold leading-none',
};

export const Label = ({ text, size }: ILabelProps) => {
  return (
    <label
      className={clsx('text-current font-poppins', mapDesign[size])}
      aria-hidden="true"
      style={{ cursor: 'inherit' }} // needed to do inline style because tailwindcss doesn't have a cursor-inherit class
    >
      {text}
    </label>
  );
};
