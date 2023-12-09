import { typography } from './button-css';
import _ from 'lodash';

const layout = [
  'inline-flex',
  'h-14',
  'p-2',
  'w-[54px]',
  'flex-col',
  'justify-center',
  'items-center',
  'flex-shrink-0',
  'bg-violet-600',
  'text-white',
  'rounded-lg',
];

const states = {
  hover: ['hover:bg-violet-700'],
};

const typo = _.difference(
  [...typography, 'text-[14px]', 'leading-[14px]'],
  ['text-base', 'leading-4'],
);

export const iconButtonMenu = {
  topContainer: [...typo, ...layout, ...states.hover],
  textContainer: ['mt-1'],
  iconContainer: ['h-4', ' w-4', 'leading-none'],
};

//typo same as base
export const iconButtonMenuImage = {
  topContainer: [...typography],
  textContainer: ['mb-1'],
  iconContainer: ['h-4', ' w-4', 'leading-none'],
};
