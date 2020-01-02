import gulp, { task as _task } from 'gulp';
import sass from './build/sass';
const scripts = require('./build/scripts').default.default;
import images from './build/images';
import sync from './build/browsersync';

[sass, scripts, images, sync, linkredirect].forEach(task => {
  task(gulp);
});

_task('build', ['sass', 'scripts', 'images', 'jekyll-build']);
