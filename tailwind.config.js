module.exports = {
    content: ["./_site/**/*.{html,js}"],
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
    theme: {
        fontFamily: {
            'sans': ['Arial'],
            'text': ['Verdana'],
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
                'foot-text': '#656565',
                'foot-accent': '#DDE7FB',
                'foot-accent-text': '#4279CE',
                'body': '#F1F1F1',
                'cell': '#FFFFFF',
                'cell-text': '#797979',
                'cell-accent': '#E7E7E7',
                'cell-accent-text': '#4279CE',
                'tags': '#F1F1F1',
                'tags-text': '#797979',
                'tags-accent': '#E7E7E7',
                'tags-accent-text': '#4279CE',
                'h1': '#4279CE',
                'h2': '#4279CE',
                'h3': '#4279CE',
                'h4': '#4279CE',
                'p': '#515151',
                'a': '#4279CE',
                'subtitle': '#979797',
                'border': '#E7E7E7',
            }
        }
    }
}