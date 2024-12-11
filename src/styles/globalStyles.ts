export const globalStyles = {
  page: {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-gray-300',
    base: 'xl:py-10'
  },
  container: {
    base: 'mx-auto max-w-7xl',
    card: {
      base: 'sm:border sm:rounded-[12px] px-4 py-4',
      light: 'bg-white border-gray-300',
      dark: 'bg-gray-800 border-gray-700'
    }
  },
  background: {
    light: 'bg-white',
    dark: 'bg-[#202020]',
    darker: 'bg-black',
    blue: 'bg-[#F4F4F6]',
    gray: {
      light: 'bg-gray-50',
      dark: 'bg-[#3A3B3C]',
      darker: 'bg-gray-900'
    }
  },
  heading: {
    primary: 'text-2xl font-bold tracking-tight',
    secondary: 'text-xl font-semibold',
    light: 'text-gray-900',
    dark: 'text-gray-100'
  },
  text: {
    primary: {
      light: 'text-gray-900',
      dark: 'text-gray-100',
      gray: 'bg-[#3A3B3C]',
      white: 'text-white',
      blue: 'text-blue-500',
      base: 'text-base'
    },
    secondary: {
      light: 'text-gray-500',
      dark: 'text-gray-300',
      base: 'text-sm'
    }
  },
  input: {
    base: 'w-full rounded-md',
    light: 'bg-white border-gray-300 text-gray-900 placeholder-black',
    dark: 'bg-gray-800 border-gray-700 text-gray-300 placeholder-white',
    focus: 'focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
    search: {
      dark: '[&_input::placeholder]:text-white'
    }
  },
  button: {
    primary: {
      base: 'flex justify-center px-3 py-2 text-sm font-semibold rounded-md',
      light: 'bg-blue-500 text-white hover:bg-blue-600',
      dark: 'bg-blue-600 text-white hover:bg-blue-700'
    },
    secondary: {
      base: 'flex justify-center px-3 py-2 text-sm font-semibold rounded-md',
      light: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      dark: 'bg-gray-700 text-gray-100 hover:bg-gray-600'
    }
  },
  sidebar: {
    base: 'h-full',
    light: 'bg-white border-r border-gray-200',
    dark: 'bg-gray-800 border-r border-gray-700'
  },
  header: {
    base: 'h-16 flex justify-between items-center px-4 border-b',
    light: 'bg-white border-gray-200',
    dark: 'bg-gray-800 border-gray-700'
  },
  content: {
    base: 'p-4',
    light: 'bg-gray-50',
    dark: 'bg-gray-900'
  },
  placeholder: {
    white: '[&::placeholder]:text-white/50',
    black: '[&::placeholder]:text-black/50'
  }
}; 