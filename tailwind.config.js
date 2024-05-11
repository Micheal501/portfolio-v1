/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Primary: '#3498db',
        Secondary: '#e74c3c',
        Background: '#ecf0f1',
        Text: '#2c3e50',
        Accent: '#f39c12',
        Shade: '#bdc3c7',
        Footer: '#34495e',
        CallToAction: '#27ae60',
      },
      fontFamily: {
        primary: 'Roboto',
      },
    },
  },
  plugins: [],
};
