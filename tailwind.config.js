/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  "darkMode": "class",
  theme: {
    extend: {
      fontFamily:{
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        SpaceMono : ["Space Mono", "monospace"],
        Roboto: ["Roboto","sans-serif"],
        Jersey: ["Jersey 15", "sans-serif"]
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: '"Inter", sans-serif',
            maxWidth: 'none',
            color: '#555',
            a: {
              color: '#667eea',
              '&:hover': {
                color: '#764ba2',
              },
            },
            strong: {
              color: '#333',
              fontWeight: '600',
            },
            h1: {
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: '600',
            },
            h2: {
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: '600',
            },
            h3: {
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: '600',
            },
            h4: {
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: '600',
            },
          },
        },
        dark: {
          css: {
            color: '#cbd5e1',
            a: {
              color: '#818cf8',
              '&:hover': {
                color: '#a5b4fc',
              },
            },
            strong: {
              color: '#e2e8f0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
