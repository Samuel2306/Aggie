var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('default', function(){
    return gulp.src('./css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
});