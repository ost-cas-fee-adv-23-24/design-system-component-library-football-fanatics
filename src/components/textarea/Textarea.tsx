import clsx from 'clsx';
import { ChangeEvent } from 'react';

export interface ITextareaProps {
  value?: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  spellCheck?: boolean;
  autoComplete?: 'on' | 'off';
  autoCorrect?: 'on' | 'off';
  autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  rows?: number;
  name?: string;
  readOnly?: boolean;
}

export const Textarea = ({
  value,
  placeholder,
  required,
  spellCheck = false,
  autoCorrect = 'off',
  onChange,
  minLength,
  maxLength,
  disabled,
  rows,
  name,
  readOnly,
  autoComplete = 'off',
  autoCapitalize = 'off',
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
