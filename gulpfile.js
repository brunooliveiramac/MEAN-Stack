var gulp = require('gulp'),
		imagemin = require('gulp-imagemin'); 


gulp.task('build-img', function(){
	 
	gulp.src('public/img/**/*') //<-- Process files inside folder **
		.pipe(imagemin()) //<--module 
		.pipe( gulp.dest('public/img') );  

}); 


