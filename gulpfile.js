var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');



gulp.task('jshint', function() {
	return gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
});

gulp.task('sass', function() {
	return gulp.src('scss/*.scss')
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function(){
	gulp.watch('scss/*.scss', ['sass']);
});
