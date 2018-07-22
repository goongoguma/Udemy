////////////////////////////////////////////
//// Keyboard Events

const form = document.querySelector('form');
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5')
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

form.addEventListener('submit',runEvent);

// Keydown
taskInput.addEventListener('keydown',runEvent);

// Keyup
taskInput.addEventListener('keyup',runEvent);

// Keypress
taskInput.addEventListener('keypress', runEvent);

// Focus
taskInput.addEventListener('focus', runEvent); // it fires off when click-in

// Blur
taskInput.addEventListener('blur', runEvent); // it fires off click-out

// Cut
taskInput.addEventListener('cut', runEvent); // it fires off ctrl + x

// Paste
taskInput.addEventListener('paste', runEvent); // it fires off ctrl + v

// Input
taskInput.addEventListener('input', runEvent); // it fires off anything we do in 'input'

// Change
select.addEventListener('change', runEvent) // it fires off option changes



function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value); // 'target' is the element of the event happens on in this case 'input'
  
  // heading.innerText = e.target.value;
  //  Get input value
  // console.log(taskInput.value); // print 'walk the dog'

  //   e.preventDefault();
}