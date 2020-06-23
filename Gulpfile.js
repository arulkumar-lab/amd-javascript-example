const gulp = require("gulp");
const amdOptimize = require("amd-optimize");
const concat = require("gulp-concat");

gulp.task("default", function() {
  gulp
    .src(["src/scripts/lib/jquery.js", "src/scripts/**/*.js"], {
      base: "src/scripts",
      allowEmpty: true
    })
    .pipe(
      amdOptimize("module/app", {
        baseURL: "src/scripts",
        configFile: "src/scripts/config.js",
        path: {
          jquery: "src/lib/jquery"
        },
        findNestedDependencies: true
      })
    )
    .pipe(concat("global.js"))
    .pipe(gulp.dest("dist/scripts"));
});
