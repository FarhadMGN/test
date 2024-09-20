const fs = require("fs");
const file1 = fs.readFileSync("dist/angular-app/runtime-es5.js", "utf8");
const file2 = fs.readFileSync("dist/angular-app/polyfills-es5.js", "utf8");
//const file3 = fs.readFileSync("dist/my-first-project/vendor.js", "utf8");
const file3 = "";
const file4 = fs.readFileSync("dist/angular-app/main-es5.js", "utf8");
const data = file1 + "\n\n\n" + file2 + "\n\n\n" + file3 + "\n\n\n" + file4;
fs.writeFileSync("dist/angularApp.js", data);
