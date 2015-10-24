var gulp = require('gulp');
var del = require('del');

gulp.task('default', ['mytask1', 'mytask2'], function() {
	console.log('Hello default task');
});

gulp.task('mytask1', function() {
	console.log('Hello task1');
});

gulp.task('mytask2', function(cb) {
	console.log('Hello task1');
	cb();
});

gulp.task('output1', function() {
	gulp
		.src('assets/vendor/bootstrap/**/*.js')
		.pipe(gulp.dest('output1'));
});

gulp.task('output2', ['clean'], function() {
	gulp
		.src('assets/vendor/bootstrap/**/*.js',
			{
				base: 'assets/vendor/'
			})
		.pipe(gulp.dest('output2'));
});

gulp.task('output3', function() {
	gulp
		.src([
				'assets/vendor/**/*.js',
				'assets/vendor/**/*.css'
			])
		.pipe(gulp.dest('output3'));
});

gulp.task('clean', function(cb) {
	del(['output2/bootstrap/**', '!output2/bootstrap']).then(function (paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
		cb();
	});
});