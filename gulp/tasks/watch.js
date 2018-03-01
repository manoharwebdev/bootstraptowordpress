var gulp = require("gulp");
var watch = require("gulp-watch");
var browserSync = require("browser-sync").create();

gulp.task("watch", function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch("./app/index.html", function() {
		browserSync.reload();
	});

	watch("./app/assets/styles/**/*.css", function() {
		gulp.start("cssinject");
	});

	watch("./app/assets/scripts/**/*.js", function() {
		gulp.start("scriptsRefresh");
	});

});

gulp.task("cssinject", ["styles"], function() {
	return gulp.src("./app/temp/styles/styles.css")
	.pipe(browserSync.stream());
});

gulp.task ("scriptsRefresh", ["scripts"], function(){
	browserSync.reload();
});