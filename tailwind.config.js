/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            primary: ['Poppins', 'sans-serif'],
        },
        container: {
            padding: {
                DEFAULT: '15px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        extend: {
            colors: {
                primary: 'hsl(180, 66%, 49%)',
                primary_dark: 'hsl(257, 27%, 26%)',
                secondary: 'hsl(0, 87%, 67%)',
                neutral_gray: 'hsl(0, 0%, 75%)',
                neutral_violet: 'hsl(257, 7%, 63%)',
                neutral_darkBlue: 'hsl(255, 11%, 22%)',
                neutral_darkViolet: 'hsl(260, 8%, 14%)',
            },
            backgroundImage: {
                logo: '/images/logo.svg',
            },
        },
    },
    plugins: [],
};
