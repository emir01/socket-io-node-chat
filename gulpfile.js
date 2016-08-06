var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('serve', function () {
    var server = gls.new('./lib/server.js');

    server.start();
    
    gulp.watch(
        [
            "./app/**/*.html",
            "./app/**/*.css",
            "./app/**/*.js"
        ],
        function (file) {
            server.notify(file);
        });

    gulp.watch("./lib/server.js", function (file) {
        server.start();
        server.notify(file);
    });
});


