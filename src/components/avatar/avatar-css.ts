export const baseAvatarGeneral = {
  topContainer: [
    'bg-violet-200',
    'overflow-hidden',
    'rounded-full',
    'border-slate-100',
  ],
};

export const topContainerSm = [
  ...baseAvatarGeneral.topContainer,
  'w-[40px]',
  'h-[40px]',
];

export const topContainerMd = [
  ...baseAvatarGeneral.topContainer,
  'border-[6px]',
  'w-[64px]',
  'h-[64px]',
];

export const topContainerLg = [
  ...baseAvatarGeneral.topContainer,
  'border-[6px]',
  'w-[96px]',
  'h-[96px]',
];

export const topContainerXl = [
  ...baseAvatarGeneral.topContainer,
  'border-[6px]',
  'w-[160px]',
  'h-[160px]',
];

export const editableLabel = [
  'cursor-pointer',
  'bg-transparent',
  'inline-block',
  'absolute',
  'top-0',
  'left-0',
  'bottom-0',
  'w-16',
  'h-16',
];
