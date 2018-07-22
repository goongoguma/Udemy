////////////////////////////////////////////////
//// REPLACE / REMOVE ELEMENT

// Create Element
const newHeading= document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading 
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading); // .replaceChild(what we wanna replace with, what we want to replace)

////////////////////////////////////////////////
//// REMOVE ELEMENT
const lis = document.querySelectorAll('li'); //
const list = document.querySelector('ul');

// Remove list itme
lis[0].remove();

// Rmove child element
list.removeChild(lis[3]);

////////////////////////////////////////////////
//// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child'); // first li
const link = firstLi.children[0];

let val;

// Classes
val = link.className; // it returns the string of the classes -> 'delete-item secondary content'
val = link.classList; // it returns DOM token list
val = link.classList[0];
link.classList.add('test'); // adding 'test' class
link.classList.remove('test'); // removing 'test' class
val = link;

//Attiributes
val = link.getAttribute('href'); // #
val = link.setAttribute('href', ' http://google.com'); // connection google.com
link.setAttribute('title', 'google')  // true
val = link.hasAttribute('href'); // true
link.removeAttribute('title'); // removing attribute 'title'
val = link;

console.log(val);




