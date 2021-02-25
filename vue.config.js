module.exports = {
    configureWebpack: () => {
        if (process.env.NODE_ENV === 'production' && process.env.VUE_APP_SANDBOX) {
            return {
                output: {
                    filename: 'js/[name].js',
                    chunkFilename: 'js/[name].js',
                },
                entry: ['./src/main-dev.js']
            };
        }
        if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_SANDBOXDEV) {
            return {
                output: {
                    filename: 'js/[name].js',
                    chunkFilename: 'js/[name].js',
                },
                entry: ['./src/main-dev.js']
            };
        }
        if (process.env.NODE_ENV === 'production') {
            return {
                output: {
                    filename: 'js/[name].js',
                    chunkFilename: 'js/[name].js',
                },
                entry: ['./src/main.js']
            };
        }
        else {
            return {
                output: {
                    filename: 'js/[name].js',
                    chunkFilename: 'js/[name].js',
                },
                entry: ['./src/main.js']
            };
        }
    }

}