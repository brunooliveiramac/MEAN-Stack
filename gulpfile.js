var gulp = require('gulp'),
		imagemin = require('gulp-imagemin'),
		clean = require('gulp-clean'); 

				//dependency -- it will be executed before
gulp.task('copy',['clean'], function(){
			//all directories and files
	return gulp.src('public/**/*')
		  .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){

	var stream = gulp.src('dist') 				  //removing assycronous (return)
	                 .pipe(clean());			  //removing assycronous
	return stream;				 				  //removing assycronous
});

// npm run gulp build-img
gulp.task('build-img',['copy'], function(){
	 
	gulp.src('dist/img/**/*') //<-- Process files inside folder **
		.pipe(imagemin()) //<--module 
		.pipe( gulp.dest('dist/img') );  

}); 


