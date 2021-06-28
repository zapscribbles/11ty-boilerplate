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
                myPurple: '#7C3AED',
                myBlue: '#1E40AF',
                myDarkBlue: '#1E3A8A',
            },
            fontFamily: {
                handwritten: ['Zeyada', 'cursive'],
                typewriter: ['Newsreader', 'serif'],
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/forms')],
};
