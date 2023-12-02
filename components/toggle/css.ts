const typography = [
  'font-poppins',
  'text-base',
  'not-italic',
  'font-semibold',
  'leading-4',
];

const commonTransitions = ['transition-all', 'ease-in', 'delay-50'];

export const baseTextColor = 'text-slate-600';
export const bgHoverColorLikes = 'hover:bg-pink-50';

export const toggleBase = {
  topContainer: [
    'px-6',
    'py-4',
    'flex',
    'items-center',
    'justify-center',
    'rounded-2xl',
    baseTextColor,
    ...typography,
    ...commonTransitions,
  ],
  iconContainer: ['w-4', 'h-4', 'mr-2'],
};

export const likeStates = {
  hover: {
    topContainer: [bgHoverColorLikes, 'hover:text-pink-600'],
    iconContainer: ['text-pink-500'],
  },
  active: {
    topContainer: ['active:text-pink-900', 'text-pink-900'],
    textContainer: [],
    iconContainer: ['text-pink-500'],
  },
};

export const likeModifiers = {
  topContainer: [
    ...likeStates.hover.topContainer,
    ...likeStates.active.topContainer,
  ],
  iconContainer: [],
};

export const commentStates = {
  hover: {
    topContainer: ['hover:bg-violet-50', 'hover:text-violet-600'],
    iconContainer: ['text-violet-600'],
  },
  active: {
    topContainer: [],
    textContainer: [],
    iconContainer: ['text-violet-600'],
  },
};
export const commentModifiers = {
  topContainer: [
    ...commentStates.hover.topContainer,
    ...commentStates.active.topContainer,
  ],
  iconContainer: [],
};
