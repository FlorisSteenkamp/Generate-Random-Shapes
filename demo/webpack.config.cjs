const path = require('path');
// const CircularDependencyPlugin = require('circular-dependency-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ResolveTypeScriptPlugin = require("resolve-typescript-plugin");

const extensions = [
    '.js', '.mjs', '.cjs', 
    '.jsx', '.cjsx', '.mjsx'
];


module.exports = {
    entry: './src/run-app.tsx',
    mode: "development",
    // mode: "production",
    //devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /^(node_modules)$/,
            },
            {
                // see https://github.com/webpack/webpack/issues/11467
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            }
        ],
    },
    resolve: {
        extensions,
        plugins: [
            new ResolveTypeScriptPlugin({includeNodeModules: false})
        ]
    },
    output: {
        filename: 'index.min.js',
        path: path.resolve(__dirname, './build'),
        library: {
            type: 'module'
        },
    },
    // plugins: [new BundleAnalyzerPlugin({ analyzerPort: 9090 })],
    stats: {
        // Don't display anything, then display colors, ...
        all: false,
        colors: true,
        errors: true,
        builtAt: true
    },
    optimization: {
        minimize: true
    },
    experiments: {
        outputModule: true
    }
};
