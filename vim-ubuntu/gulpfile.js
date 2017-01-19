var gulp = require('gulp');
var plantuml = require('gulp-plantuml');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync');

gulp.task('webserver',function() {
  gulp.src('build/')
    .pipe(webserver({
      livereload: true,
      host: '0.0.0.0',
      port: '8080'
    }));
});

gulp.task('plantuml',function() {
  gulp.src("./src/plantuml/*.pu")
    .pipe(plantuml({
      jarPath: "/usr/bin/plantuml.jar"
    }))
    .pipe(gulp.dest("./build/diagram"));
});

gulp.task('watch',function() {
  gulp.watch("./src/plantuml/*.pu", [ "plantuml" ]);
  gulp.src('gulpfile.coffee');
});

gulp.task('default', ['plantuml', 'webserver', 'watch']);
