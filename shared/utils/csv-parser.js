const csvParser = require("csv").parse;
const fs = require("fs");
const path = require("path");

const getCSVData = (filename,cols) => {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.resolve(__dirname, `../../database/data/${filename}.csv`))
      .pipe(csvParser({columns:cols,fromLine:2}))
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on('error',(error)=>resolve(error));
  });
};

module.exports = { getCSVData };
