import { difference as _difference } from 'lodash';

import { btnBaseGeneral, commonTransitions, stateDisabled } from './button-css';

const iconButtonColorViolet = ['text-violet-600', 'hover:text-violet-900'];
const typography = ['text-sm', 'not-italic', 'font-semibold', 'leading-3'];
const iconButtonColorsGray = ['text-slate-400', 'hover:text-slate-600'];
export const iconButtonViolet = {
  topContainer: _difference(
    [
      ...btnBaseGeneral,
      ...iconButtonColorViolet,
      ...typography,
      ...stateDisabled,
      ...commonTransitions,
    ],
    ['rounded', 'disabled:bg-gray-200'],
  ),
};

export const iconButtonGray = {
  topContainer: _difference(
    [
      ...btnBaseGeneral,
      ...iconButtonColorsGray,
      ...typography,
      ...stateDisabled,
      ...commonTransitions,
    ],
    ['rounded', 'disabled:bg-gray-200'],
  ),
};
