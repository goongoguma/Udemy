///////////////////////////////////////////
// SINGLE ELEMENT SELECTORS

document.getElementById()
console.log(document.getElementById('taks-title'));

// Get things from the html element 
console.log(document.getElementById('task-title').id); //task-title 
console.log(document.getElementById('task-title').className); 

const taksTitle = document.getElementById('task-title')

// Change styling
taksTitle.style.background = '#333';
taksTitle.style.color = '#fff';
taksTitle.style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change content
taksTitle.textContent = 'Task List';
taksTitle.innerTest = 'My Tasks';
taksTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()
console.log(document.querySelector('#taks-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red'; // single element selector, only gonna get the first one  
document.querySelector('ul li').style.color = 'blue'; 

document.querySelector('li:last-child').style.color = 'red'; 
document.querySelector('li:nth-child(3)').style.color = 'yellow'; 
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

/////////////////////////////////////////
////MULTIPLE ELEMENTS SELECTORS

document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]); // select one specific
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItmes = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

//document.getElementsByTagName
const items = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Convert HTML Collection into array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});
console.log(lis);













