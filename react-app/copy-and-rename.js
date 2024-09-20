const fs = require("fs");
const glob = require('glob-fs')({ gitignore: true });

if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
}

const files1 = glob.readdirSync('build/static/js/*.js', {});
const file1 = fs.readFileSync(files1[0], "utf-8");
fs.writeFileSync("dist/reactApp.js", file1);

const files2 = glob.readdirSync('build/static/css/*.css', {});
const file2 = fs.readFileSync(files2[1], "utf-8"); //files2[1]???
fs.writeFileSync("dist/reactApp.css", file2);
