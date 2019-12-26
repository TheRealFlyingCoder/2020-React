export default {
    height: {
        header: '72px',
        footer: '144px',
        containerMin: '400px',
    },
    width: {
        oneCOlumnMax: '600px',
        oneCOlumn: '60%',
    },
    colours: {
        black: '#212121',
        white: '#fff',
        lightGrey: '#f1f3f4',
        blackTransparent: 'rgba(0, 0, 0, 0.1)',
    },
    layer: {
        header: 4,
    },
    font: {
        family: {
            primary: "Roboto, sans-serif",
            secondary: "Open Sans, sans-serif",
        },
    },
    helpers: {
        containerText: (text, isDark = true) => `
        ::after {
            content: '${text}';
            display: flex;
            color: ${isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
            margin: 0 15px 15px 0;
            justify-content: flex-end;
            align-items: flex-end;
        }
        `            
    }
}