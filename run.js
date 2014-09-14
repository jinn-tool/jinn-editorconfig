'use strict';

var gulp = require('gulp')

module.exports = function (jinn, cb) {
  jinn.log('installing editorconfig')

  function copy() {
    var source = __dirname + '/templates/**/*'

    gulp.src([source], {dot: true})
      .pipe(gulp.dest(process.cwd() + '/' + jinn.appname))
      .on('end', cb)
  }

  copy()
}
