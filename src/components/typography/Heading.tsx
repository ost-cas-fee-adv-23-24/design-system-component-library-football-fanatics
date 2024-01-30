import clsx from 'clsx';

export interface ITypographyProps {
  level: '1' | '2' | '3' | '4';
  text: string;
}

const mapDesign = {
  '1': 'text-5xl not-italic font-bold leading-tight',
  '2': 'text-[40px] not-italic font-bold leading-tight',
  '3': 'text-[32px] not-italic font-semibold ',
  '4': 'text-2xl not-italic font-semibold leading-tight',
};

export const Heading = ({ text, level }: ITypographyProps) => {
  switch (level) {
    case '1':
      return (
        <h1 className={clsx('text-slate-600 font-poppins', mapDesign[level])}>
          {text}
        </h1>
      );
    case '2':
      return (
        <h2 className={clsx('text-slate-600 font-poppins', mapDesign[level])}>
          {text}
        </h2>
      );
    case '3':
      return (
        <h3 className={clsx('text-slate-600 font-poppins', mapDesign[level])}>
          {text}
        </h3>
      );
    case '4':
      return (
        <h4 className={clsx('text-slate-600 font-poppins', mapDesign[level])}>
          {text}
        </h4>
      );
    default:
      console.log('Heading level not found');
      return null;
  }
};
