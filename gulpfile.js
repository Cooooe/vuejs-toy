
var gulp = require('gulp');
//var webserver = require('gulp-webserver');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var minifyhtml = require('gulp-minify-html');
//var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['log']);

//$$.log(JSON.stringify($));

var src = 'public/src';
var dist = 'dist';

var paths = {
	js: src + '/js/*.js',
	scss: src + '/scss/*.scss',
	html: src + '/**/*.html',
	libs: 'public/lib/*.js'

};


gulp.task('server', function() {
	return gulp.src(dist + '/')
			.pipe($.webserver());
});


gulp.task('merge', function() {
	return gulp.src(paths.js)
			.pipe($.concat('dist.js'))
			.pipe($.uglify())
			.pipe(gulp.dest(dist + '/js'));
});

gulp.task('merge-libs', function() {
	return gulp.src(paths.libs)
			.pipe($.concat('libs.js'))
			.pipe($.uglify())
			.pipe(gulp.dest(dist + '/js'));
});

gulp.task('compile-sass', function() {
	return gulp.src(paths.scss)
			.pipe($.sass())
			.pipe(gulp.dest(dist + '/css'));
});

gulp.task('compress-html', function() {
	return gulp.src(paths.html)
			//.pipe('')
			.pipe($.htmlmin())
			//.pipe($.replace(/\.\.\//g, ''))
			.pipe(gulp.dest(dist + '/html'));
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(paths.js, ['merge']);
	gulp.watch(paths.sass, ['compile-sass']);
	gulp.watch(paths.html, ['compress-html']);
	gulp.watch(dist + '/**').on('change', livereload.changed);
});


gulp.task('default', [
	'server','merge-libs',  'merge', 'compile-sass', 'compress-html', 'watch'
]);