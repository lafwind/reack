var path = require('path');

var config = {
    entry: path.resolve(__dirname, './app/main.js'),

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style!css!sass' },
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"}
        ]
    }
};

module.exports = config;
