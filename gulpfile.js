var gulp = require('gulp'),
		imagemin = require('gulp-imagemin'),
		clean = require('gulp-clean'),
		concat = require('gulp-concat'),
		htmlReplace = require('gulp-html-replace'); 


gulp.task('default', ['copy'], function(){

		gulp.start('build-img', 'build-js', 'build-html');

});
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
gulp.task('build-img', function(){
	 
	gulp.src('dist/img/**/*') //<-- Process files inside folder **
		.pipe(imagemin()) //<--module 
		.pipe( gulp.dest('dist/img') );  

}); 

//concat
gulp.task('build-js', function(){

	gulp.src(['dist/js/main.js', 'dist/js/controllers/fotos-controller'])
		.pipe(concat('js/all.js'))
		.pipe(gulp.dest('dist/js'));

});

//replace files
gulp.task('build-html', function(){

	gulp.src('dist/**/*.html')
		.pipe(htmlReplace({
			js: 'all.js'
		}))
		.pipe(gulp.dest('dist'))


});


