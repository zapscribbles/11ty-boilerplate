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
                darkBase: '#061A40',
                darkHighlight: '#0353A4',
                button: '#006DAA',
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
