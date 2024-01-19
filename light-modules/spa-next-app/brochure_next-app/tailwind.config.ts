import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        // => @media (min-width: 360px) { ... }
  
        md: "600px",
        // => @media (min-width: 600px) { ... }
  
        tb: "768px",
        // => @media (min-width: 768px) { ... }
  
        lg: "904px",
        // => @media (min-width: 904px) { ... }
  
        smallDesktop: "1024px",
        // => @media (min-width: 1024px) { ... }
  
        xl: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      fontSize: {
        xs: "10px",
        base: "16px",
        lg: "18px",
        xl: "25px",
        "2xl": "31px",
        "4xl": "61px",
      },
      fontFamily: {
        dmserif: ["DM Serif Display", "sans-serif"],
        ciutadella: ["Ciutadella Rounded", "sans-serif"],
        proximanova: ["Proxima Nova", "Helvetica", "Arial", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary':'#eeeeee',
        'purple': '#65509c',
        'orange': '#ef7e29',
        'dark-orange': '#ea5924',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'light-gray':'#f5f5f5',
         oceanBlue: "#0aa4ad"
      },
    },
  },
  plugins: [],
}
export default config
