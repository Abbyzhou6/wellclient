var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function(){
	gulp.src('public/js/well-*.js')
	.pipe(uglify())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist/js'));
});