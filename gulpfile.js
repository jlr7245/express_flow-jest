const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const flow = require('gulp-flowtype');

// gulp setup
gulp.task('scripts', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'));
});

// flow setup
gulp.task('flow', () => {
  return gulp.src('src/**/*.js')
    .pipe(flow({killFlow: false}));
});

// watching
gulp.task('watch', ['flow', 'scripts'], () => {
  gulp.watch('src/**/*.js', ['flow', 'scripts']);
});

// setting the default
gulp.task('default', ['watch']);