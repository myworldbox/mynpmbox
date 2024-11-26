const path = require('path');

module.exports = {
    resolve: {
        alias: {
            'mynpmbox': path.resolve(__dirname, './src/util')
        }
    }
};