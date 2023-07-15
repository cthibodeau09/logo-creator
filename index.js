// Inquirer node package import
const inquirer = require("inquirer");
// File system module node package import
const fs = require("fs");
// Shapes.js import 
const {Triangle, Square, Circle} = require("./lib/shapes");

// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
  // File starts as an empty string
  let svgString = "";
  // Sets width and height of logo container
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  svgString += "<g>";
  // Takes user input for shape choice and inserts it into SVG file
  svgString += `${answers.shape}`;


  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }


  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
 
  svgString += "</g>";
 
  svgString += "</svg>";


  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// Questions for user input
function promptUser() {
    inquirer
    .prompt([
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
    ])
.then((answers) => {
  // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
  if (answers.text.length > 3) {
    console.log("Must enter a value of no more than 3 characters");
    promptUser();
  } else {
    // Calling write file function to generate SVG file
    writeToFile("logo.svg", answers);
  }
});
}

// Calling promptUser function so inquirer prompts fire off when application is ran
promptUser();