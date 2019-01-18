## 1. Critical Question related to React

- What is React and its purpose?

  - React is a JavaScript library
  - React's ultimate purpose is to show content(HTML) to users and handle user interaction

- Why didn't we use Redux to make the app?

  - React can work by itself
  - But React can also work with a tremendous variety of other livraries , packages, servers and databases.

- What was 'class' thing in React?

  - It is a JS 'class'
  - React _components_ are made using either JS functions or classes.

- What was the HTML looking stuff in React?

  - It is called JSX
  - It looks like HTML and can be placed in JS code. It Determines the content of a React app just like normal HTML

- How did the screen change when a mouse is moved?

  - An event handler
  - Event handlers are used to detext user interaction and respond to it.

- Why did we add two libraries (React and ReactDOM)?

  - React is split into two separate libraries.
  - React knows what a component is and how to make components work together.
  - ReactDOM knows how to take a component and make it show up in the DOM.

## 2. Exploring a Create-React-App Project

- src : Folder where we put all the source code we write.
- public : Folder that stores static files like images.
- node_modules : Folder that contains all of our project dependencies.
- package.json : Records our project dependencies and configures our project.
- package-lock.json : Records the exact version of packages that we install.
- README.md : Instructions on how to use this project.

## 3. JavaScript Module Systems

- import React from 'react'
  - import : we want to get code from some other file or dependency
  - React : The variable we want to assign this import to (It is a convention to name the variable according to the name of library)
  - from : We are about to specify the name of the library or file we are importing from
  - 'react' : The name of the dependency or path to the file we are importing from node_modules

## 4. Displaying Content with Functional Components

- A component is a _Function_ or _Class_ that produces HTML to show the user using JSX and handles feedback from the user using Event Handlers.

## 5. What is JSX?

- It is a special dialect of JS (it is not HTML!)
- Browsers do not understand JSX code. We write JSX then run tools to turn it into normal JS
- Very similar in form and function to HTML with a couple differences.

## 6. Inline Styling with JSX

- JSX vs HTML
  - Adding custom styling to an element uses different syntax.
    - HTML : <div style="background-color:red;"></div>
    - JSX : <div style={{backgroundColor:'red'}}></div>

## 7. Class vs ClassName

- Adding a class to an element uses different syntax.
  - HTML : class
  - JSX : className (to avoid collision of words with class in component)

## 8. Referencing JS Variables in JSX

- JSX can reference JS variables and function call inside of {}.

## 9. Values JSX Can't show

- We are not allowed to take plain JS object and reference it inside of JSX to print it up as 'text'.

## 10. Three Tenets of Components

- Component Nesting
  - A component can be shown inside of another.
- Component Reusability
  - We want to make components that can be easily reused through out application.
- Component Configuration
  - We should be able to configure a component when it is created. When we create different components, we have ability to somehow customize them when they are created.

## 11. Specifying Images in JSX

- We are going to use library called 'faker'.
  - It automatically generates massive amount of realistic fake data.
