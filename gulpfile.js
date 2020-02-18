const gulp = require('gulp');
const {
    watch,
    series,
    src,
    dest
} = gulp;
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// Paths
const paths = {
    html: '*.html',
    styles: {
        src: './scss/*.scss',
        dest: './css',
        build: './build/css'
    },
    scripts: {
        src: './js',
        build: './build/js'
    }
};

// BrowserSync
const server = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // Watchers
    watch(paths.styles.src, styles);
    watch(paths.scripts.src).on('change', browserSync.reload);
    watch(paths.html).on('change', browserSync.reload);
}

// Parse SCSS
const styles = () => {
    return src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./css'))
        .pipe(browserSync.stream());
}

// PostCSS
const buildStyles = () => {

    // Postcss plugins
    const plugins = [
        autoprefixer(),
        cssnano()
    ];

    return gulp.src('./css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'))
}

// Default
exports.default = series(server);

// Tasks
exports.dev = series(server);
exports.build = series(styles, buildStyles);