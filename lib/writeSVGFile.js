const fs = require('fs');

function writeToFile(filePath, data) {
    fs.writeFile(filePath, data, (err) =>
    err ? console.error(err) : console.log('SVG logo successfully generated!'));
}

 module.exports = writeToFile;