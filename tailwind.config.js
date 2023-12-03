module.exports = {
  darkMode: 'class',
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  presets: [
      require('./tailwind.preset'),
  ],
  theme: {
      extend: {
          container: {
              center: true,
              padding: {
                  DEFAULT: '1rem',
                  sm: '1rem',
                  md: '1rem',
                  lg: '2rem',
                  xl: '3rem',
                  '2xl': '4rem',
              },
              screens: {
                  sm: '667px',
                  md: '768px',
                  lg: '1024px',
                  xl: '1136px',
                  '2xl': '1366px',
                  '3xl': '1440px',
              },
          },

          fontFamily: {
              body: 'YekanBakh',
              display: 'YekanBakh',
          },
      }
  },


}


