module.exports = {
    content: ["./_site/*.{html,js}", "./_site/blog/*.{html,js}"],
    theme: {
        fontFamily: {
            'sans': ['Arial'],
            'text': ['Segoe UI'],
        },
        extend: {
            colors: {
                'cook': '#1F1F1F',
                'cook-text': '#C9C9C9',
                'cook-accent': '#333333',
                'cook-accent-text': '#C9C9C9',
                'menu': '#4279CE',
                'menu-text': '#FFFFFF',
                'menu-accent': '#609CEC',
                'menu-accent-text': '#FFFFFF',
                'foot': '#FFFFFF',
                'foot-text': '#515151',
                'foot-accent': '#DDE7FB',
                'foot-accent-text': '#4279CE',
                'body': '#F1F1F1',
                'body-accent': '#FFFFFF'
            }
        }
    }
}