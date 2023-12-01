import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'Arial', 'sans'],
        tune: ["Euclid Circular A", "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif']
      },
      textColor: {
        "dark-green": '#004d40',
      },
      backgroundImage: {

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        '3': ' repeat(3, minmax(0, 1fr))',
        '4': ' repeat(4, minmax(0, 1fr))',
        '5': ' repeat(3, minmax(0, 1fr))',
        '6': ' repeat(4, minmax(0, 1fr))',
      },

      gridAutoRows: {
        'auto': 'auto'
      }

    }
  },
  plugins: [],
}
export default config
