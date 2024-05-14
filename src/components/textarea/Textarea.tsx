import clsx from 'clsx';

import { EAutoCapitalizeOptions } from '../input-group';
import { EStateCommonOnOff } from './utils/textArea.enum';
import { ITextareaProps } from './utils/textArea.interface';

export const Textarea = ({
  value,
  placeholder,
  required,
  spellCheck = false,
  autoCorrect = EStateCommonOnOff.OFF,
  onChange,
  minLength,
  maxLength,
  disabled,
  rows,
  name,
  readOnly,
  autoComplete = EStateCommonOnOff.OFF,
  autoCapitalize = EAutoCapitalizeOptions.OFF,
}: ITextareaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      autoCorrect={autoCorrect}
      autoComplete={autoComplete}
      autoCapitalize={autoCapitalize}
      spellCheck={spellCheck}
      maxLength={maxLength}
      minLength={minLength}
      disabled={disabled}
      rows={rows}
      name={name}
      readOnly={readOnly}
      className={clsx(
        'c-textarea w-full h-40 p-4',
        'text-xl not-italic font-medium leading-[1.35] font-poppins text-slate-900',
        'placeholder:text-slate-500',
        'rounded-lg outline-transparent border-solid border border-slate-200 bg-slate-100',
        'hover:border-2 hover:border-slate-300',
        'focus:outline focus:outline-2 focus:outline-violet-600',
      )}
    />
  );
};
