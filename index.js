// Include packages here
const inquirer = require('inquirer');
const questions = require('./lib/questions.js');
const writeToFile = require('./lib/writeSVGFile.js');
const generateSVGShape = require('./lib/generateSVGShape');


function init() {
    inquirer.prompt(questions).then(answer => {
        const SVG_template = generateSVGShape(answer);
        writeToFile('./examples/logo.svg', SVG_template);
    });
}

//     SVG_template = promptUser();
//     writeToFile('./examples/logo.svg', SVG_template);

init();