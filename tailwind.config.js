module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  
  purge: [],
  theme: {
    boxShadow: {
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    },
    extend: {
      colors: {
        'theme-black': '#030c11',
        'theme-white': '#dde4f9',
        'theme-blue': '#1c3c9b',
        'theme-yellow': '#f6bd60',
        'theme-darkblue': '#0c1941',
      },
      fontFamily: {
        nunito: ['Nunito'],
        playfair: ['Playfair Display'],
      },
      backgroundImage: theme => ({
                 'slide1': "url('img/slide-1.png')" ,
                 'slide2': "url('img/slide-2.png')",
                 'slide3': "url('img/slide-3.png')",
        }),
    },
    
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    textColor: ['group-hover'],
    fill: ['group-hover'],
    backgroundColor: ['active'],
    boxShadow: ['active'],
  },
  plugins: [
    
  ],
}
