var gulp = require('gulp');
var uglifyjs = require('uglify-js');
var minifier = require('gulp-uglify/minifier')
var concat = require('gulp-concat');

gulp.task('scripts', function(){
	return gulp.src('js/*.js')
	.pipe(concat('app.min.js'))
	.pipe(uglifyjs())
	.pipe(gulp.dest('dist'));
})

// gulp.task('watch', funciton(){
// 	gulp.watch('src/*.{js,coffee}', ['scripts'])
// })