// Raziur Rahman, 2017
// Concat the vendor files to reduce server requests

const gulp = require('gulp')
const concat = require('gulp-concat')

var css = [
	"./bower_components/bootstrap-css/css/bootstrap.min.css",
    "./bower_components/fullcalendar/dist/fullcalendar.min.css",
]

var js = [
	"./bower_components/jquery/dist/jquery.min.js",
    "./bower_components/bootstrap-css/js/bootstrap.min.js",
    "./bower_components/angular/angular.min.js",
    "./bower_components/angular-resource/angular-resource.min.js",
    "./bower_components/angular-route/angular-route.min.js",
    "./bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
    "./bower_components/moment/min/moment.min.js",
    "./bower_components/fullcalendar/dist/fullcalendar.min.js",
    "./bower_components/angular-ui-calendar/src/calendar.js"
]

gulp.task('js', ()=>{
	return gulp.src(js).
			pipe(concat('vendor.js')).
			pipe(gulp.dest('./dest/'))
})

gulp.task('css', ()=>{
	return gulp.src(css).
			pipe(concat('vendor.css')).
			pipe(gulp.dest('./dest/'))
})

gulp.task('default', ['js', 'css'])