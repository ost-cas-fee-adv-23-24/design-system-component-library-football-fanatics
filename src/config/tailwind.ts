export const colorsTailwind = {
  pink: {
    50: '#FDF2F8',
    100: '#FCE7F3',
    200: '#FBCFE8',
    300: '#F9A8D4',
    400: '#F472B6',
    500: '#EC4899',
    600: '#DB2777',
    700: '#BE185D',
    800: '#9D174D',
    900: '#831843',
  },
  violet: {
    50: '#F5F3FF',
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6',
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95',
  },
  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  red: {
    DEFAULT: '#F00',
  },
};

export const spacingTailwind = {
  xxs: '4px',
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '48px',
  xxl: '64px',
};

export const fontsTailwind = {
  poppins: ['Poppins', 'sans-serif'],
};

export const backgroundImageExtensionTailwind = () => ({
  'gradient-pink-violet-2080': `linear-gradient(90deg, ${colorsTailwind.pink[500]} -15.33%, ${colorsTailwind.violet[600]} 38.87%)`,
  'gradient-pink-violet-3070': `linear-gradient(90deg, ${colorsTailwind.pink[500]} -12.56%, ${colorsTailwind.violet[600]} 62.92%)`,
  'gradient-pink-violet-5050': `linear-gradient(90deg, ${colorsTailwind.pink[500]} 0%, ${colorsTailwind.violet[600]} 100%)`,
});

export const zIndexTailwind = {
  '10': '10',
  '20': '20',
  '30': '30',
  '40': '40',
};
