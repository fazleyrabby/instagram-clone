module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    theme: {
        fill: (theme) => ({
            red: theme('colors.red.primary')
        }),
        colors: {
            white: '#ffffff',
            blue: {
                medium: '#005c9a'
            },
            black:{
                medium: '#005c98',
                faded: '#00000059'
            },
            gray:{
                base: '#616161',
                background: '#fafafa',
                primary: '#dbdbdb'
            },
            red: {
                primary: '#ed4956'
            }
        }
    }
};

// text-red-primary
// text-gray-base
// border-gray-primary
// bg-blue-medium
// text-blue-medium