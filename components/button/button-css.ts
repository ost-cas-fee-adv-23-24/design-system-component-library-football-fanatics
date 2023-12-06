export const statesHover = [
  'hover:outline-[3px]',
  'hover:outline',
  'hover:outline-slate-100',
];

export const stateActive = [
  'active:outline-[4px]',
  'active:outline',
  'active:outline-slate-200',
];

export const stateDisabled = [
  'disabled:bg-gray-200',
  'disabled:cursor-not-allowed',
  'disabled:text-gray-300',
];

export const commonTransitions = ['transition-all', 'ease-in', 'delay-50'];
export const typography = [
  'font-poppins',
  'text-base',
  'not-italic',
  'font-semibold',
  'leading-4',
];
export const btnBaseGeneral = [
  'rounded',
  'px-8',
  'flex',
  'items-center',
  'justify-center',
];

export const btnBase = {
  topContainer: [
    ...btnBaseGeneral,
    ...typography,
    ...statesHover,
    ...stateActive,
    ...commonTransitions,
  ],
  iconContainer: ['h-5', 'w-5 leading-none'],
  textContainer: [],
};

export const onlyIconCss = {
  topContainer: [
    'py-8',
    'px-8',
    'text-white',
    'rounded-full',
    'bg-slate-600',
    'flex',
    'items-center',
    'justify-center',
    ...statesHover,
    ...stateActive,
  ],
  disabledState: [...stateDisabled, 'bg-none'],
};

export default btnBase;

export const md = {
  topContainer: ['px-3', 'py-3', 'text-sm'],
  iconContainer: ['h-4', ' w-4', 'leading-none'],
  textContainer: [],
};

export const lg = {
  topContainer: ['px-6', 'py-4', 'text-base'],
  iconContainer: ['h-4', ' w-4', 'leading-none'],
  textContainer: [],
};

export const colors = {
  primary: ['bg-slate-600', 'text-white'],
  secondary: [
    'bg-violet-600',
    'text-white',
    'hover:outline-violet-100',
    'hover:outline-violet-200',
  ],
  tertiary: [
    'bg-gradient-pink-violet-5050',
    'text-white',
    'hover:outline-violet-100',
    'active:outline-violet-200',
  ],
};

export const simpleLinkClasses = {
  topContainer: [
    'text-violet-600',
    'flex',
    'items-center',
    'hover:border-violet-200',
    'border-b-[1px]',
    'py-0.5',
    'border-solid',
    'border-violet-600',
    ...commonTransitions,
  ],
  textContainer: ['p-0'],
};

export const copyToClipboardClasses = {
  topContainer: [
    'text-slate-600',
    'rounded-2xl',
    'hover:bg-slate-100',
    'active:bg-slate-100',
    ...commonTransitions,
  ],
  iconContainer: [],
};
