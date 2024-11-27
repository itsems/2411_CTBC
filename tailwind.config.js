/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        xl: '1px 1px 6px 3px #ddd',
        '2xl': '0px 0px 10px 4px #dcdcdc'
      },
      colors: {
        main: '#24a5a6',
        darkGreen: '#007c7d',
        darker: '#00625f',
        secondary: '#28a7a8',
        grey: '#d1d1d1',
        'grey-999': '#999',
        'font-color': '#666666',
        red: '#ff0000',
        'light-green': '#30a701',
        'dark-red': '#c44141'
      },
      fontSize: {
        md: '15px'
      }
    }
  },
  plugins: []
}