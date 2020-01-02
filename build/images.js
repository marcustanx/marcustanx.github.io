import imagemin from 'gulp-imagemin';

const imgPath = 'img/**/*.+(png|jpg|gif|svg)';
const destPath = '_site/img';

export default gulp => {
  gulp.task('images', () => {
    return gulp
      .src(imgPath)
      .pipe(imagemin())
      .pipe(gulp.dest(destPath));
  });
};
