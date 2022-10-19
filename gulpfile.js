const fs = require("fs");
const { series, parallel, src, dest, watch } = require("gulp");
const less = require("gulp-less");

function cleanPacks(cb) {
    fs.rmSync("packs", {
        recursive: true,
        force: true,
    });
    cb();
}

function convertPacks(cb) {
    fs.mkdirSync("packs");
    const packNames = fs.readdirSync("src/packs");
    packNames.forEach((packName) => {
        const packJsons = fs.readdirSync(`src/packs/${packName}`);
        let dbData = "";
        packJsons.forEach((packJson) => {
            const data = JSON.stringify(
                JSON.parse(fs.readFileSync(`src/packs/${packName}/${packJson}`))
            );
            dbData += data + "\n";
        });
        fs.writeFileSync(`packs/${packName}.db`, dbData);
    });
    cb();
}

function watchPacks(cb) {
    watch("src/packs/*/*.json", series(cleanPacks, convertPacks));
    cb();
}

function transpileLess(cb) {
    src("src/style/dreamsanddeath.less").pipe(less()).pipe(dest("./styles/"));
    cb();
}

function watchLess(cb) {
    watch("src/style/*.less", series(transpileLess));
    cb();
}

exports.less = series(transpileLess);
exports.watch = parallel(watchPacks, watchLess);
exports.pack = series(cleanPacks, convertPacks);
