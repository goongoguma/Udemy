## 1. Critical Question related to React

- What is React and its purpose?

  - React is a JavaScript library
  - React's ultimate purpose is to show content(HTML) to users and handle user interaction

- Why didn't we use Redux to make the app?

  - React can work by itself
  - But React can also work with a tremendous variety of other libraries , packages, servers and databases.

- What was 'class' thing in React?

  - It is a JS 'class'
  - React _components_ are made using either JS functions or classes.

- What was the HTML looking stuff in React?

  - It is called JSX
  - It looks like HTML and can be placed in JS code. It Determines the content of a React app just like normal HTML

- How did the screen change when a mouse is moved?

  - An event handler
  - Event handlers are used to detect user interaction and respond to it.

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

## 12. Showing Custom Children

- When we pass one component to another as child component, It is going to show up inside of the component on the prop's object and specifically on a property of the prop's object called the children property.

```js
<CommentDetail
  author="Sam"
  timeAgo="Today at 4:00PM"
  commentText="Thank you!"
  source={faker.image.avatar()}
/>
```

## 12. Extracting JSX to New Components

- Steps for creating a reusable and configurable component

  - Identify the JSX that apprears to be duplicated
  - What is the purpose of that block of JSX? Think of a descriptive name for what it does
  - Create a new file to house this new component - it should have the same name as the component
  - Create a new component in the new file, paste the JSX into it
  - Make the new component configurable by using React's 'props' system.

## 13. React's Props System

- Props is a system for passing data from a parent component to a child component.
- Goal is to customize or configure a child component.

## 14. Showing Custom Children

- It is able to pass one component to another component as props.

```js
<ApprovalCard>
  <CommentDetail
    author="Sam"
    timeAgo="Today at 4:00PM"
    commentText="Thank you!"
    source={faker.image.avatar()}
  />
</ApprovalCard>
```

## 15. Component Reuse

- Passing children to a component and then showing the children inside of parents component, we can provide as many elements as we wish.
- One key thing that we have to keep in mind is that whenever we want to use the technique, we always have to make sure that we go into the target component (ApprovalCard component) and make sure that we somewhere reference props.children inside of there.

```js
<ApprovalCard>
  <h4>Warning!</h4>
  <div>You sure you want to do this?</div>
</ApprovalCard>
```

## 16. Class-Based Components

- Functional Components
  - Good for simple content
- Class Components
  - Good for just about everything else
- Benefits of Class Components
  - Easier code organiztion
  - Can use 'state' -> Easier to handle user input
  - Understands lifecycle events -> Easier to do things when the app first starts

## 17. Getting a USERS Physical Location

- You can find it in MDN.
- type 'window.navigator.geolocation.getCurrentPosition();' inside of App component.

```js
window.navigator.geolocation.getCurrentPosition(
  position => console.log(position), // you can check your current position here
  err => console.log(err) // in case the user does not allow to share their location
);
```

## 18. Handling Async Operations with Functional Components

- Steps of what happens inside of user's browser
  - JS file loaded by browser
  - App component gets created
  - We call geolocation service (it will take sometime to get the result back from a server)
  - App returns JSX, gets rendered to page as HTML
  - We get result of geolocation
  - Tell the component to rerender itself with this new information

## 19. Refactoring from Frunctional to Class Components

- Rules of Class Components
  - Must be a JavaScript Class
  - Must extend (subclass) React.Component
  - Must define a 'render' method that returns some amount of JSX

## 20. The Rules of State

- Rule of State
  - Only usable with class components.
  - You will confuse props with state.
  - 'State' is a JS object that contains data relevant to a singular component.
  - Updating 'state' on a component causes the component to instantly rerender.
  - _State must be initialized when a component is created._
  - _State can only be updated using the function'setState'_.

## 21. Initializing State Through Constructors

- Constructor
  - constructor function is going to be called any time an instance of the class is created. In other words any time that we create a new instance of the app component and show it on the screen. It is going to be automatically and instantly called before anything else.
- Super

  - The app component is extending or borrowing functionality from the react component base class (React.Component).
    It has a constructor function of its own that goes through some amount of setup our real component for us.
  - When we define a constructor function inside of our App class, we are essentially overriding or replacing the consturctor function that is inside of the reactor component class.
  - But we still want to make sure that all the set up code inside of the React.Component constructor function still gets called.
  - So to make sure that the parents or react components constructor function gets called, we call super with props.
  - In other words, Super is a reference to the parent's constructor function.

  ## 22. App Lifecycle Walkthrough

  - Steps from the first load up to showing result on browser.
    - JS file loaded by browser
    - Instance of App component is created
    - App components 'constructor' function gets called
    - State object is created and assigned to the 'this.state' property
    - We call geolocation service
    - React calls the components render method
    - _App returns JSX, gets rendered to page as HTML_
    - We get result of geolocation!
    - We update our state object with a call to 'this.setState'
    - React sees that we updated the state of a component
    - React calls our 'render' method a seconde time
    - _Render method returns some (updated) JSX_
    - React takes that JSX and updates content on the screen
