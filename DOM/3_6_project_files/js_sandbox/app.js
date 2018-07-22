// Create element
const li = document.createElement('li');

// Add class 
li.className = 'collection-item'; // adding class-name to li

// Add id
li.id = 'new-item'; // adding id-name to li

// Add attribute
li.setAttribute('title', 'New Item'); // adding title-name

// Create text node and append
li.appendChild(document.createTextNode('Hello World')); // appendChild means put something inside of something

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// Create new link element
const link = document.createElement('a');

// Add classes
link.className = 'delete-item secondary-content'

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);