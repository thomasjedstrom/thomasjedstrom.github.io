var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var bsConfig = require("gulp-bootstrap-configurator");
var rev = require("gulp-rev");
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

// NOTES:
// I'm currently not using gulp-rev but I'll add it in eventually
//
//


gulp.task('styles', function() {
	gulp.src('src/stylesheets/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'nested', // libsass doesn't support expanded yet
			precision: 10,
			includePaths: ['.']
		}).on('error', sass.logError))
		.pipe(concat('style.css'))
        .pipe(cssnano())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
        .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('js', function() {
	gulp.src('src/scripts/*.js')
		.pipe(concat('app.js'))
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(uglify())
		.on('error', function(error){
			console.log(error);
		})
		.pipe(gulp.dest('./dist/'))
});

// BOOTSTRAP TASKS
// For CSS
gulp.task('make-bootstrap-css', function(){
	return gulp.src("./config.json")
		.pipe(bsConfig.css())
		.pipe(cssnano())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest("./dist"));
});

// For JS
gulp.task('make-bootstrap-js', function(){
	return gulp.src("./config.json")
		.pipe(bsConfig.js())
		.pipe(uglify())
		.pipe(gulp.dest("./dist"));
});

// FOR OTHER VENDORS
gulp.task('copy', function () {
	// Jquery
    gulp.src('./node_modules/jquery/dist/jquery.min.js')
		.pipe(gulp.dest('./dist/'));
	// Jquery FitText
	gulp.src('./node_modules/textillate/assets/jquery.fittext.js')
		.pipe(gulp.dest('./dist/'));
	// Jquery Lettering
	gulp.src('./node_modules/letteringjs/jquery.lettering.js')
		.pipe(gulp.dest('./dist/'));
	// Jquery Textillate
	gulp.src('./node_modules/textillate/jquery.textillate.js')
		.pipe(gulp.dest('./dist/'));
	// Jquery FullPage.js
	gulp.src('./node_modules/fullpage.js/dist/jquery.fullpage.min.js')
		.pipe(gulp.dest('./dist/'));
	// Jquery FullPage.css
	gulp.src('./node_modules/fullpage.js/dist/jquery.fullpage.min.css')
		.pipe(gulp.dest('./dist/'));
	// Animate CSS
	gulp.src('./node_modules/textillate/assets/animate.css')
		.pipe(gulp.dest('./dist/'));
});





// gulp  (watch)
gulp.task('default',function() {
	gulp.start('styles');
	gulp.start('js');
	gulp.start('make-bootstrap-css');
	gulp.start('make-bootstrap-js');
	gulp.start('copy');
	gulp.watch('src/stylesheets/*.scss',['styles']);
	gulp.watch('src/stylesheets/*/*.scss',['styles']);
	gulp.watch('src/scripts/*.js',['js']);
	gulp.watch('./config.json',['make-bootstrap-css', 'make-bootstrap-js']);
});