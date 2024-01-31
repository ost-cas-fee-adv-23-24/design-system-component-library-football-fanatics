import clsx from 'clsx';
import React, { useId } from 'react';
import { Icon } from '../icon/Icon';
import { EIConTypes } from '../icon/utils/icon.enum';
import { TIconType } from '../icon/utils/icon.interface';
import { Label } from '../label/Label';

export interface IInputFieldGroupProps {
  text?: string;
  placeholder: string;
  as:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'file'
    | 'hidden';
  state: 'default' | 'error' | 'success';
  required?: boolean;
  icon?: TIconType;
  labelText: string;
  errorMessage?: string;
  spellCheck?: boolean;
  autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
  autoCorrect?: 'on' | 'off';
}

export const InputFieldGroup = ({
  text,
  placeholder,
  as = 'text',
  state = 'default',
  required = false,
  icon,
  labelText,
  errorMessage,
  spellCheck = false,
  autoCapitalize = 'off',
  autoCorrect = 'off',
}: IInputFieldGroupProps) => {
  const [inputText, setInputText] = React.useState(text ? text : '');
  const inputId = useId();

  return (
    <div className="c-input-group flex flex-col gap-1">
      <div className="text-slate-700">
        <Label size="M" text={labelText} htmlFor={inputId} />
      </div>

      <div className="relative">
        <input
          id={inputId}
          type={as}
          placeholder={placeholder}
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          required={required}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          spellCheck={spellCheck}
          className={clsx(
            'rounded-lg outline-transparent border-solid border border-slate-200 bg-slate-50 placeholder text-slate-700 w-full h-12 p-4',
            'hover:border-violet-600',
            'focus:outline focus:outline-2',
            state === 'default' && 'focus:border-none focus:outline-violet-600',
            state === 'error' &&
              'outline outline-2 outline-red hover:border-red',
            state == 'success' && '',
          )}
        />

        <span
          className={clsx(
            'absolute flex items-center p-4 right-0 bottom-0',
            state === 'default' && 'text-slate-600',
            state === 'error' && 'text-red',
            state === 'success' && '',
          )}
        >
          {state === 'error' ? (
            <Icon type={EIConTypes.CANCEL} />
          ) : (
            icon && <Icon type={icon} />
          )}
        </span>
      </div>
      {state === 'error' && errorMessage && (
        <div className="text-red text-right font-poppins text-xs leading-3 font-medium w-full">
          <span>{errorMessage} </span>
        </div>
      )}
    </div>
  );
};
