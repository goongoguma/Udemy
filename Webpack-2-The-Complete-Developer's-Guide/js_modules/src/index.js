const button = document.createElement("button");

button.innerText = "Click me";

button.onclick = () => {
  // System is a global variable inside of JS
  System.import("./image_viewer").then(module => {
    module.funcImg();
  });
};

document.body.appendChild(button);
