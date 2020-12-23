const mix = require('laravel-mix');
require('laravel-mix-nunjucks');

mix.njk('src/', 'dist/', {
   watch: true,
   data: {      
   },
   block: 'content',   
   envOptions: {
      watch: true,
      noCache: true
   },
   manageEnv: (nunjucks) => {
      nunjucks.addFilter('containString', function(str, containStr) {
         if(str == undefined) return false;
         return str.indexOf(containStr) >= 0
      })
   },
});

mix
   .setPublicPath("dist")
   .js("src/assets/js/app.js", "assets/js")
   .js("src/assets/js/main.js", "assets/js")   
   .sass("src/assets/scss/app.scss", "assets/css")
   .options({
      processCssUrls: false
   })
   .sass("src/assets/scss/bootstrap.scss", "assets/css")   
   .copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'dist/assets/webfonts')
   .minify("dist/assets/css/bootstrap.css")
   .minify("dist/assets/css/app.css")
   .minify("dist/assets/js/main.js")
   .minify("dist/assets/js/app.js");
