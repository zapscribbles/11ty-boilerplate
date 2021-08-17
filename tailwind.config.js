module.exports = {
    purge: {
        content: ['_site/**/*.html'],
        options: {
            safelist: [],
        },
    },
    theme: {
        extend: {
            colors: {
                lightest: '#B9D6F2',
                light: '#A9CDEF',
                darkBlue: '#061A40',
                mediumBlue: '#0353A4',
                regularBlue: '#006DAA',
                greyBlue: '#003559',
            },
            fontFamily: {
                heading: ['Patua One', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/forms')],
};
