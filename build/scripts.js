import eslint, { format } from 'gulp-eslint';
import uglify from 'gulp-uglify';

const jsPath = '_scripts/*.js';
const destPath = '_site/js';

export default gulp => {
  gulp.task('scripts', () => {
    return (
      gulp
        .src(jsPath)
        .pipe(
          eslint({
            useEslintrc: true,
          })
        )
        .pipe(format())
        // .pipe(uglify())
        .pipe(gulp.dest(destPath))
        .pipe(gulp.dest('js'))
    );
  });
};
