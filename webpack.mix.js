const mix = require('laravel-mix');
const isProduction = process.env.NODE_ENV == "production";
const path = require("path");


mix
    .alias({
        '@': path.join(__dirname, 'resources/js')
    });

mix
    .js('resources/js/main.js', 'public/js')
    .vue({
        extractVueStyles: true,
    })
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: true,
        postCss: ['autoprefixer'],
        autoprefixer: {
            options: {
                browsers: ['last 6 versions'],
            }
        },
        hmrOptions: {
            host: 'localhost',
            port: '9000'
        }
    })
    .version()
    .copyDirectory('resources/assets/images', 'public/images') // copy images

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = "development";
    }
};
