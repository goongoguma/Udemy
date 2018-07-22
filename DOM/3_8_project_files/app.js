////////////////////////////////////////////////
//// Event Listeners
document.querySelector('.clear-tasks').addEventListener('click', function(e) {
  console.log('Hello World');

  //e.preventDefault(); // if there is no '#', this will prevent default of  .clear-tasks
});

document.querySelector('.clear-tasks').addEventListener('click', onClick); // this works without including a function inside
function onClick(e) {
  //console.log('Clicked'); 
  let val;

  val = e;

  // Event target element
  // 'target' represents the event that acutually happens on
  val = e.target;  // returns actual html part
  val = e.target.id; // no id exist
  val = e.target.className; // returns clear-tasks btn black 
  val = e.target.classList; // returns list of all classes ["clear-tasks", "btn", "black", value: "clear-tasks btn black"]

  // e.target.innerText = 'Hello'; // it changes button text to 'Hello'

  // Event type
  val = e.type; // returns 'click'

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY; // returns coordinate of Y axis
  val = e.clientX; // returns coordinate of X axis

  // Coords event relative to the element
  val = e.offsetY; // returns coordinate of pixels from Y axis in the element
  val = e.offsetX; // returns coordinate of pixels from X axis in the element

 
  console.log(val);
}
  