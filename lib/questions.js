const questions = [
    {
        type: 'input',
        message: 'Choose three characters for your SVG logo',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What font color would you like? Enter a color keyword or hex value:',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Choose a shape from the following for your logo:',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be? Enter a color keyword or hex value: ',
        name: 'shapeColor'
    }
]


module.exports = questions;