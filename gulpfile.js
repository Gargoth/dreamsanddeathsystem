const fs = require("fs");
const { series, parallel } = require("gulp");

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

exports.pack = series(cleanPacks, convertPacks);
