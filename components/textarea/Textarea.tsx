import clsx from 'clsx';
import React, { ChangeEvent } from 'react';

export interface ITextareaProps {
  value?: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  spellCheck?: boolean;
  autoCorrect?: 'on' | 'off';
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
  spellCheck,
  autoCorrect,
  onChange,
  minLength,
  maxLength,
  disabled,
  rows,
  name,
  readOnly,
}: ITextareaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      autoCorrect={autoCorrect}
      spellCheck={spellCheck}
      maxLength={maxLength}
      minLength={minLength}
      disabled={disabled}
      rows={rows}
      name={name}
      readOnly={readOnly}
      className={clsx(
        'w-full h-40 p-4',
        'text-xl not-italic font-medium leading-[1.35] font-poppins text-slate-900',
        'placeholder:text-slate-500',
        'rounded-lg outline-transparent border-solid border border-slate-200 bg-slate-100',
        'hover:border-2 hover:border-slate-300',
        'focus:outline focus:outline-2 focus:outline-violet-600',
      )}
    />
  );
};
