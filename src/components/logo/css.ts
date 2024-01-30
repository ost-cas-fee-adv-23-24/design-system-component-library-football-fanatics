const logoBase = {
  topContainer: ['flex', 'items-center', 'justify-center'],
  logoContainer: ['w-[64px]', 'h-[64px]'],
};

export const logoLeft = {
  topContainer: [...logoBase.topContainer, 'flex-row'],
  logoContainer: [...logoBase.logoContainer, 'mr-6'],
};
export const logoTop = {
  topContainer: [...logoBase.topContainer, 'flex-col'],
  logoContainer: [...logoBase.logoContainer, 'mb-4'],
};

export const iconColors = {
  white: 'text-white',
  violet: 'text-violet-500',
  gradient: 'text-violet-500',
};

export default logoBase;
