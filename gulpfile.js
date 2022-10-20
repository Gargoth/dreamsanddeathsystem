const { series, parallel, src, dest, watch } = require("gulp");
const less = require("gulp-less");

function transpileLess(cb) {
    src("src/style/dreamsanddeath.less").pipe(less()).pipe(dest("./styles/"));
    cb();
}

function watchLess(cb) {
    watch("src/style/*.less", series(transpileLess));
    cb();
}

exports.less = series(transpileLess);
exports.watch = parallel(watchLess);
