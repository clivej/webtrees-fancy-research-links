/**
  * Laravel mix - Fancy Research Links
 *
 * Output:
 * 		- dist
 *        - resources
 *          - css
 *          - lang (.mo files)
 *          - views
 *        FancyResearchLinksModule.php
 *        module.php
 *        LICENSE.md
 *        README.md
 *
 */

let mix = require('laravel-mix');
let config = require('./webpack.mix.config');
require('laravel-mix-clean');

// Disable mix-manifest.json (https://github.com/laravel-mix/laravel-mix/issues/580#issuecomment-919102692)
// Prevent the distribution zip file containing an unwanted file
mix.options({ manifest: false })

mix
    .setPublicPath('./dist')
    .copyDirectory(config.plugins_dir, config.dist_dir + '/plugins')
    .copyDirectory(config.public_dir + '/views', config.dist_dir + '/resources/views')
    .copy(config.public_dir + '/lang/*.mo', config.dist_dir + '/resources/lang')
    .copy('FancyResearchLinksModule.php', config.dist_dir)
    .copy('module.php', config.dist_dir)
    .copy('LICENSE.md', config.dist_dir)
    .copy('README.md', config.dist_dir)
    .clean();
