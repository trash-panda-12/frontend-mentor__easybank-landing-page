const postcss = require('gulp-postcss')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename')
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')
const webpack = require('webpack-stream')

function styles() {
  let plugins = [
    tailwindcss('./tailwind.config.js'),
    postcssPresetEnv({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    autoprefixer
  ]

  return gulp.src('css/**/*.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(postcss(plugins))
    .pipe(concat({ path: 'style.css' }))
    .pipe(rename('styles.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('.'))
}

function server() {
  console.log("\r\n Starting BrowserSync \r\n" );

  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    },
  });
};

function reload(done) {
  browserSync.reload();
  done();
};

function repack() {
  return gulp.src('./js/application.js')
  .pipe(webpack({
  }))
  .pipe(rename('packed.js'))
  .pipe(gulp.dest('./dist'));
}

function watchFiles(done) {
  gulp.watch('*.html', reload);
  gulp.watch('./css/**/*.scss', gulp.series(styles,reload));
  gulp.watch('./tailwind.config.js', gulp.series(styles,reload));
  gulp.watch('./js/*.js', gulp.series(repack, reload))
};

// Spin up server & watch files
exports.styles = styles
exports.repack = repack
exports.default = gulp.parallel(server, watchFiles);