const mix = require('laravel-mix');
const writeFilePlugin = require('write-file-webpack-plugin');


mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/style.scss', 'public/css')
    .webpackConfig({
        plugins: [
            new writeFilePlugin()
        ]
    });

if (mix.inProduction()) {
    mix.version();
}
