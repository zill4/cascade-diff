module.exports = {
    mode: 'production',
    entry: {
        'cascade-diff': ['./src/scripts/modules/Diff.ts']
    },
    output: {
        filename: './bundle/[name].min.js',
        libraryTarget: 'var',
        library: '[name]'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ['ts-loader']
        }]
    }
};
