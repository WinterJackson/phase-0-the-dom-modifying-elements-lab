// Write your code here!
const main = document.querySelector('main#main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

const yourName = 'John Winter'; 
newHeader.textContent = `${yourName} is the champion`;
