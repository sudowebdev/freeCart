var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'static/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {

    entry : APP_DIR + '/app.jsx',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : "babel-loader",
                query: {
                    presets: ['react', 'es2015'] 
                }
            }
        ]
    },

    resolve: {
        // you can now require or import('file') instead of require('file.js or file.jsx')
        extensions: ['.js', '.jsx']
    }


};

module.exports = config;




