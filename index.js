// Inquirer node package import
const inquirer = require("inquirer");

// File system module node package import
const fs = require("fs");

// Shapes.js import 
const {Triangle, Square, Circle} = require("./lib/shapes");

class svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/logo.svg">';
    }
    setTextElement(text, color){
        this.textElement = '<text x="150" y="125" font-size="50" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>';
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}

// Questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to 3 characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword or a hexadecimal number:",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword or a hexadecimal number:",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Which Pizel Image would you like?",
        choices: ["Triangle", "Square", "Circle"],
    },
];