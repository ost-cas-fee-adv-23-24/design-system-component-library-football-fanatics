import { EIConTypes } from '../../icon';
import { EStateCommonOnOff } from '../../textarea/utils/textArea.enum';
import {
  EAutoCapitalizeOptions,
  EInputFieldGroupType,
  EStateInputFieldGroup,
} from './inputFielfGroup.enum';

export interface IInputFieldGroupProps {
  text?: string;
  placeholder: string;
  as: EInputFieldGroupType;
  state: EStateInputFieldGroup;
  required?: boolean;
  icon?: EIConTypes;
  labelText: string;
  errorMessage?: string;
  spellCheck?: boolean;
  autoCapitalize?: EAutoCapitalizeOptions;
  autoCorrect?: EStateCommonOnOff;
  notifyValueChange: (value: string) => void;
}
