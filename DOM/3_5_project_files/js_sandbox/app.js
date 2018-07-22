let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes; //it returns child nodes list. 'text' is just for a line-break
val = list.childNodes[0]; // it returns text node
val = list.childNodes[0].nodeName; // it returns text node
val = list.childNodes[1].nodeType; // it returns 1

// These numbers tell what type of nodes these are
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype
// child nodes give us different types of nodes not just elements


// Get children element nodes
 val = list.children; //it returns HTML collection.
// children just give us elements
val = list.children[1];
list.children[1].textContent = 'Hello';

// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild; // returns text node
val = list.firstElementChild;

// Last child
val = list.lastChild; // returns text node
val = list.lastElementChild;

// Count child elements
val = list.childElementCount // returns 5 (children of ul)

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement; // most cases it returns same thing with 'parentNode'
val = listItem.parentElement.parentElement; // parent of ul is 'card-action' 

// Get next sibling
val = listItem.nextSibling; // returns text node
val = listItem.nextElementSibling.nextElementSibling;

// Get prev sibling
// val = listItem.previousSibling; // returns text node
// val = listItem.previousElementSibling; // retuns null (there is no previous sibling for first element)


console.log(val);