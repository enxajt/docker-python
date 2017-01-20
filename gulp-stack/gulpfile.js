var gulp = require('gulp'),
livereload = require('gulp-livereload'),
exec = require('child_process').exec;

gulp.task('js', function() {
  gulp.src([
    './src/js/*.js'
  ]).pipe(livereload());
});

gulp.task('watch', function(){
  var onChange = function (event) {
    console.log('File '+event.path+' has been '+event.type);
  };

  livereload.listen();
  gulp.watch([
      './src/js/*.js'
  ], ['js'])
      .on('change', onChange);
});

gulp.task('default', ['watch', 'js']);
