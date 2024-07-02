const path = require('path');

module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
            helperDirs: path.join(__dirname, '/src/helpers'),
            partialDirs: [path.join(__dirname, '/src/partials')],
        },
    });
    return config;
};