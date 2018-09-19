const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        config,
    );


    config.resolve = {

        alias: {
            libs: path.join(__dirname, 'src/common/js/libs'),
        }
    }


    // config.devServer = {
    //     port: 8090,
    //     contentBase: path.join(__dirname, './dist'),
    //     historyApiFallback: true,
    //     proxy: [{
    //         context: ['/api/'],
    //         target: "http://localhost:7001",
    //         // target: 'http://127.0.0.1:8888',
    //         secure: false
    //     }]
    // }
    return config;

}