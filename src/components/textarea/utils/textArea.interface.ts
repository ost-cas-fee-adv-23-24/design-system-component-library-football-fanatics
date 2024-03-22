import { ChangeEvent } from 'react';

import { EAutoCapitalizeOptions } from '../../input-group';
import { EStateCommonOnOff } from './textArea.enum';

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
