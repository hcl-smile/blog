const { transform } = require("@babel/core");
const { parse } = require("@babel/parser");
const fs = require("fs");

const funs = fs.readFileSync("./before.js", "utf-8");

const ast = parse(funs);

const res = transform(funs, {
  plugins: [[require("./plugin"), { library: "plugin" }]],
  sourceType: "module",
});

fs.existsSync("./after.js") && fs.unlinkSync("./after.js");
fs.writeFileSync("./after.js", res.code, "utf8");
