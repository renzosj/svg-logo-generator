const {Circle, Triangle, Square} = require('../shapes.js');

describe('Triangle', () => {
    describe('render', () => {
        it('should create a triangular svg logo with blue color', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,0 -150,400 450,400" fill="blue" />
            <text x="150" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`);
        });
    });
});

describe('Circle', () => {
    describe('render', () => {
        it('should create a circular svg logo with orange color', () => {
            const shape = new Circle();
            shape.setColor("orange");
            expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="orange" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`);
        });
    });
});

describe('Square', () => {
    describe('render', () => {
        it('should create a square svg logo with aquamarine color', () => {
            const shape = new Square();
            shape.setColor("aquamarine");
            expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="aquamarine" />
            <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`);
        });
    });
});