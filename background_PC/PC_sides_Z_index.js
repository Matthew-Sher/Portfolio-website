let container = document.querySelector('#background-pc-container');
let frontElement = container.querySelector('.front');
let backElement = container.querySelector('.back');
let leftElement = container.querySelector('.left');
let rightElement = container.querySelector('.right');
let topElement = container.querySelector('.top');
let bottomElement = container.querySelector('.bottom');
let elementWidth = frontElement.offsetWidth;

frontElement.querySelector('.first-part').style = `transform: translateZ(${elementWidth * 0.2}px)`;
frontElement.querySelector('.second-part').style = `transform: translateZ(${elementWidth * 0.05}px)`;
frontElement.querySelector('.third-part').style = `transform: translateZ(${elementWidth * 0.2}px)`;
frontElement.querySelector('.fourth-part').style = `transform: translateZ(${elementWidth * 0.4}px)`;

backElement.querySelector('.first-part').style = `transform: translateZ(${elementWidth * (-0.26)}px) rotateX(-10deg)`;
backElement.querySelector('.second-part').style = `transform: translateZ(${elementWidth * (-0.15)}px)`;
backElement.querySelector('.third-part').style = `transform: translateZ(${elementWidth * (-0.3)}px)`;
backElement.querySelector('.fourth-part').style = `transform: translateZ(${elementWidth * (-0.3)}px)`;

leftElement.querySelector('.first-part').style = `transform: translateZ(${elementWidth * (-0.275)}px)`;
leftElement.querySelector('.second-part').style = `transform: translateZ(${elementWidth * (-0.1)}px)`;
leftElement.querySelector('.third-part').style = `transform: translateZ(${elementWidth * (-0.3)}px)`;
leftElement.querySelector('.fourth-part').style = `transform: translateZ(${elementWidth * (-0.4)}px)`;

rightElement.querySelector('.first-part').style = `transform: translateZ(${elementWidth * (-0.275)}px)`;
rightElement.querySelector('.second-part').style = `transform: translateZ(${elementWidth * (-0.1)}px)`;
rightElement.querySelector('.third-part').style = `transform: translateZ(${elementWidth * (-0.3)}px)`;
rightElement.querySelector('.fourth-part').style = `transform: translateZ(${elementWidth * (-0.4)}px)`;

topElement.querySelector('.first-part').style = `transform: translateZ(${elementWidth * (-0.4)}px)`;
topElement.querySelector('.second-part').style = `transform: translateZ(${elementWidth * 0.1}px)`;
topElement.querySelector('.third-part').style = `transform: translateZ(${elementWidth * 0.3}px)`;

bottomElement.querySelector('.first-part').style = `transform: translateZ(${elementWidth * 0.05}px)`;
bottomElement.querySelector('.second-part').style = `transform: translateZ(${elementWidth * 0.4}px)`;
