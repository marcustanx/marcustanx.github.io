const gulp = require('gulp');
const sass = require('./build/sass');
const scripts = require('./build/scripts').default.default;
const images = require('./build/images');
const sync = require('./build/browsersync');

[sass, scripts, images, sync, linkredirect].forEach(task => {
  task(gulp);
});

gulp.task('build', ['sass', 'scripts', 'images', 'jekyll-build']);