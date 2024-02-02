import clsx from 'clsx';
import React, { useId } from 'react';

import { EIConTypes, Icon } from '../icon';
import { ELabelSize, Label } from '../label';
import { EStateCommonOnOff } from '../textarea';
import { IInputFieldGroupProps } from './utils/inputFieldGroup.interface';
import {
  EAutoCapitalizeOptions,
  EInputFieldGroupType,
  EStateInputFieldGroup,
} from './utils/inputFielfGroup.enum';

export const InputFieldGroup = ({
  text,
  placeholder,
  as = EInputFieldGroupType.TEXT,
  state = EStateInputFieldGroup.DEFAULT,
  required = false,
  icon,
  labelText,
  errorMessage,
  spellCheck = false,
  autoCapitalize = EAutoCapitalizeOptions.OFF,
  autoCorrect = EStateCommonOnOff.OFF,
}: IInputFieldGroupProps) => {
  const [inputText, setInputText] = React.useState(text ? text : '');
  const inputId = useId();

  return (
    <div className="flex flex-col gap-1">
      <div className="text-slate-700">
        <Label size={ELabelSize.M} text={labelText} htmlFor={inputId} />
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
            state === EStateInputFieldGroup.DEFAULT &&
              'focus:border-none focus:outline-violet-600',
            state === EStateInputFieldGroup.ERROR &&
              'outline outline-2 outline-red hover:border-red',
            state == EStateInputFieldGroup.DEFAULT && '',
          )}
        />

        <span
          className={clsx(
            'absolute flex items-center p-4 right-0 bottom-0',
            state === EStateInputFieldGroup.DEFAULT && 'text-slate-600',
            state === EStateInputFieldGroup.ERROR && 'text-red',
            state === EStateInputFieldGroup.SUCCESS && '',
          )}
        >
          {state === 'error' ? (
            <Icon type={EIConTypes.CANCEL} />
          ) : (
            icon && <Icon type={icon} />
          )}
        </span>
      </div>

      {state === EStateInputFieldGroup.ERROR && errorMessage && (
        <div className="text-red text-right font-poppins text-xs leading-3 font-medium w-full">
          <span>{errorMessage} </span>
        </div>
      )}
    </div>
  );
};
