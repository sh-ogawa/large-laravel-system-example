const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': __dirname + '/resources/js'
        }
    }
})

mix.extend( 'i18n', function( webpackConfig, ...args ) {
    webpackConfig.module.rules.forEach( ( module ) => {
        // Search for the "vue-loader" component, which handles .vue files.
        if( module.loader !== 'vue-loader' ) {
            return;
        }
        // Within this module, add the vue-i18n-loader for the i18n tag.
        module.options.loaders.i18n = '@kazupon/vue-i18n-loader';
    });
})

mix.js('resources/js/app.js', 'public/js')
    .extract(['axios', 'bulma',
        'lodash.defaultsdeep', 'vee-validate', 'vue',
        'vue-i18n', 'vue-template-compiler', 'vuex'])
    .sass('resources/sass/app.scss', 'public/css', {
        implementation: require('node-sass')
    })
    .options({
        processCssUrls: false
    })
    .version()
