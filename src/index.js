const componentData = {
    message: '🤖 Hello World 🤓',
};

document.addEventListener('alpine:init', () => {
    Alpine.store('navFunctions', {
        customFunction() {
            console.log('You ran a custom function!');
        },
    });
});

document.addEventListener('alpine:init', () => {
    Alpine.store('modals', {
        toggleModal(modalID) {
            this[modalID].open = !this[modalID].open;
        },
        help: {
            open: false,
            title: 'Help',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus, dui a condimentum semper, ex dui maximus mi, eget dapibus leo erat laoreet magna. In hac habitasse platea dictumst. Nunc et sagittis augue. Ut elit ipsum, pellentesque vel ornare quis, pellentesque id quam. Donec tincidunt venenatis dolor a feugiat. Donec.',
        },
        faq: {
            open: false,
            title: 'FAQ',
            content:
                "<p class='faq-question'>What is a website?</p>" +
                "<p>It's a site on the web, silly</p>" +
                "<p class='faq-question'>How do I play this game?</p>" +
                '<p>Live your life, roll the dice, hope for a crit and deal with the fails.</p>' +
                '',
        },
    });
});
