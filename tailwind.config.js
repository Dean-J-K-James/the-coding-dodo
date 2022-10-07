module.exports = {
    content: ["./_site/*.{html,js}", "./_site/blog/*.{html,js}"],
    theme: {
        fontFamily: {
            'sans': ['Arial'],
        },
        extend: {
            colors: {
                'menu': '#4279CE',
                'menu-text': '#FFFFFF',
                'menu-accent': '#609CEC',
                'menu-accent-text': '#FFFFFF',
            }
        }
    }
}