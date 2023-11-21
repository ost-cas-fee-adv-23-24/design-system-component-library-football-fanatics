const btnBase = {
  topContainer: [
    'rounded px-8',
    'min-w-[250px]',
    'bg-gray-100',
    'flex',
    'items-center',
    'justify-center',
    'text-white',
  ],
  iconContainer: ['h-5', 'w-5'],
  textContainer: ['mr-4', 'ml-4', 'font-poppins'],
  disabledState: [
    'disabled:bg-gray-200',
    'disabled:cursor-not-allowed',
    'disabled:text-gray-300',
  ],
};

export default btnBase;

export const sm = {
  topContainer: ['px-4', 'py-2', 'text-xs'],
  iconContainer: ['h-4', ' w-4'],
  textContainer: [],
};

export const md = {
  topContainer: ['px-8', 'py-4', 'text-sm'],
  iconContainer: ['h-4', ' w-4'],
  textContainer: [],
};

export const lg = {
  topContainer: ['px-8', 'py-6', 'text-base'],
  iconContainer: ['h-6', ' w-6'],
  textContainer: [],
};

export const colors = {
  primary: ['bg-red-200'],
  secondary: ['bg-red-500'],
  tertiary: ['bg-red-600'],
};
