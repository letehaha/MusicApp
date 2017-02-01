var gulp 		= require('gulp'),
    browserSync = require('browser-sync'),
    sass 		= require('gulp-sass'),
    autoprefixer= require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src('app/scss/main.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir : 'app'
		},
		notify: false
	})
});

gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/*.сss', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});