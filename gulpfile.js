var fs = require("fs");
var data = fs.readFileSync("./front-end-roadmap.md", "utf-8");
// console.log(data)
var md2json = require("md-2-json");
var json = md2json.parse(data);

var outputFilename = "./front-end-roadmap.json";

fs.writeFile(outputFilename, JSON.stringify(json, null, 4), function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("JSON saved to " + outputFilename);
  }
});
