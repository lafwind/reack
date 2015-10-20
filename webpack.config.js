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
            { test: /\.scss$/, loader: 'style!css!sass' }
        ]
    }
};

module.exports = config;

// module.exports = {
//     entry: ['webpack/hot/dev-server', './main.js'],
//     // './app/main.js',


//     output: {
//         path: __dirname,
//         filename: 'bundle.js'
//     },

//     module: {
//         loaders: [
//             { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
//             { test: /\.css$/, loader: 'style!css' },
//             { test: /\.scss$/, loader: 'style!css!sass' }
//         ]
//     }
// };
