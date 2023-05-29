const {Circle, Triangle, Square} = require('./shapes.js');

function generateSVGShape(answer) {
            answer.text = answer.text.slice(0, 3);
            let SVG_template;
            switch (answer.shape) {
                case "Circle": 
                    SVG_template = new Circle(answer.text, answer.textColor, answer.shapeColor).render();
                    console.info(SVG_template.shapeColor);
                break;
                case "Triangle": 
                    SVG_template = new Triangle(answer.text, answer.textColor, answer.shapeColor).render();
                break;
                case "Square": 
                    SVG_template = new Square(answer.text, answer.textColor, answer.shapeColor).render();
                break;
                default:
                    console.log("Unexpected Error");
            }
            return SVG_template;
}

module.exports = generateSVGShape;