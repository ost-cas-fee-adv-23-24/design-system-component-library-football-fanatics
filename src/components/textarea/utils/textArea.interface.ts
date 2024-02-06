import { ChangeEvent } from 'react';
import { EStateCommonOnOff } from './textArea.enum';
import { EAutoCapitalizeOptions } from '../../input-group';

export interface ITextareaProps {
  value?: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  spellCheck?: boolean;
  autoComplete?: EStateCommonOnOff;
  autoCorrect?: EStateCommonOnOff;
  autoCapitalize?: EAutoCapitalizeOptions;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  rows?: number;
  name?: string;
  readOnly?: boolean;
}
