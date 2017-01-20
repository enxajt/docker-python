gulp        = require 'gulp'
plantuml    = require 'gulp-plantuml'
webserver   = require 'gulp-webserver'

gulp.task 'webserver', ->
  gulp.src 'build/'
    .pipe webserver
      livereload: true,
      host: '0.0.0.0'
      port: '35729 '

gulp.task 'plantuml', ->
  gulp.src "./src/plantuml/*.pu"
    .pipe plantuml(
      jarPath: "/usr/bin/plantuml.jar"
    )
    .pipe gulp.dest "./build/diagram"

gulp.task 'watch', ->
  gulp.watch "./src/plantuml/*.pu", [ "plantuml" ]
  gulp.src 'gulpfile.coffee'

gulp.task 'default', ['plantuml', 'webserver', 'watch']

# browserSync = require('browser-sync')
#
# gulp.task 'bs', ->
#   browserSync.init(null, {
#     server:
#       baseDir: './'
#   })
# 
# gulp.task 'bsReload', ->
#   browserSync.reload()
# 
# gulp.task 'default', ['bs'], ->
#   g.watch './src/.html', ['bsReload']
