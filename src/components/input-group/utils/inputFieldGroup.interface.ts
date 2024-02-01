import { EIConTypes } from '../../icon';
import {
  EAutoCapitalizeOptions,
  EAutoCorrectOptions,
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
  autoCorrect?: EAutoCorrectOptions;
}
