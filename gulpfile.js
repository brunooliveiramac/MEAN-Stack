var gulp = require('gulp'),
		imagemin = require('gulp-imagemin'); 

// npm run gulp build-img
gulp.task('build-img', function(){
	 
	gulp.src('public/img/**/*') //<-- Process files inside folder **
		.pipe(imagemin()) //<--module 
		.pipe( gulp.dest('public/img') );  

}); 


