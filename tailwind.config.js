/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const colors = require('tailwindcss/colors')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const breakpoint = require('./assets/breakpoint.json')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const palette = require('./assets/palette.json')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    important: true,
    darkMode: 'class', //if you want to use dark mode
    theme: {
        screens: {
            xs: `${breakpoint.xs}px`,
            sm: `${breakpoint.sm}px`,
            md: `${breakpoint.md}px`,
            lg: `${breakpoint.lg}px`,
            xl: `${breakpoint.xl}px`,
            xxl: `${breakpoint.xxl}px`,
        },
        extend: {
            colors: {
                primary: palette.primary,
                line: {
                    green: '#17BF0C',
                },
            },
            spacing: {
                'screen-layout': '1440px',
            },
        },
        plugins: [],
    },
}
