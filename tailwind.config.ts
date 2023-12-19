import daisyui from 'daisyui'
import  { type Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: 'business',
    themes: [
      'dark',
      'business',
      'synthwave',
      'haloween',
      'forrest',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'night',
      'coffee',
      'dim',
      'sunset'
    ]
  }
} satisfies Config
