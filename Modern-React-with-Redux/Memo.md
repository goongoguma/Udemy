- ## Tutorial Memo Index

1. 리액트란 무엇인가?
2. Create-React-App에 대해 알아보기
3. 자바스크립트 모듈
4. 함수형 컴포넌트
5. JSX?
6. JSX의 인라인 CSS스타일
7. Class vs ClassName
8. JSX에서 JS 변수 사용하기
9. JSX에서 사용하지 못하는 값
10. 컴포넌트의 3가지 요소
11. faker 라이브러리 사용하기
12. 컴포넌트를 다른 컴포넌트로 넘겨주기
13. 새로운 컴포넌트에서 JSX 가져오기
14. 리액트 props
15. 컴포넌트의 재활용
16. 클래스 컴포넌트
17. 사용자의 위치정보 받는법
18. 함수형 컴포넌트에서 비동기 처리해주기
19. 함수형 컴포넌트에서 클래스 컴포넌트로 전환
20. state의 규칙
21. constructor를 사용한 state의 초기화
22. geolocation 앱의 작동 순서
23. 라이프사이클 사용해보기
24. 왜 라이프사이클을 사용할까?
25. 스타일링 해주기
26. JSX에서 함수를 이용해 값 표기하기
27. 사진 검색 앱 Overview
28. Controlled Element?
29. Axios vs Fetch
30. Async/Await 사용해보기
31. Axios 초기설정하기
32. ref를 사용법
33. 콜백과 이미지 로딩
34. 이벤트 핸들러 작성할때의 주의점
35. Youtube API 사용해보기
36. 콜백을 사용해 부모 컴포넌트의 상태 바꿔주기
37. 비디오앱 완성
38. 리덕스에 대해서1
39. 리덕스에 대해서2
40. 리덕스 써보기
41. 리덕스 키노트

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
<ApprovalCard>
  <CommentDetail
    author="Sam"
    timeAgo="Today at 4:00PM"
    commentText="Thank you!"
    source={faker.image.avatar()}
  />
</ApprovalCard>
```

## 13. Extracting JSX to New Components

- Steps for creating a reusable and configurable component

  - Identify the JSX that apprears to be duplicated
  - What is the purpose of that block of JSX? Think of a descriptive name for what it does
  - Create a new file to house this new component - it should have the same name as the component
  - Create a new component in the new file, paste the JSX into it
  - Make the new component configurable by using React's 'props' system.

## 14. React's Props System

- Props is a system for passing data from a parent component to a child component.
- Goal is to customize or configure a child component.

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

## 23. Introducing Lifecycle Method

- Component Lifecycle flow
  - constructor
  - render
  - (content visible on screen)
  - componentDidMount
    - If we define a function inside of a class(out of the render method), and define specifically 'componenDidMount()'. It is automatically called only one time when the component first gets rendered on a screen.
  - (Sit and wait for updates in setState...)
  - componentDidUpdate
    - If we define a function inside of a class(out of the render method), and define specifically 'componenDidUpdate()'. It is automatically called anytime when the component gets updated itself.
      (Anytime the component updates, the render method would be called, it will return JSX, it would be shown on the screen, and right after that componentWillUpdate would be called.)
  - (Sit and wait until this component is no longer shown)
  - componentWillUnmount
    - It is usually used if we do want some clean-up after the component.

## 24. Why Lifecycle Methods?

- componentDidMount
  - The method is a perfect location to do some initial data loading for the component.
  - Or kick off some outside process like getting the users current position if you only have to do this one time.
  - According to react-document, do not data loading inside of constructor function even if you can do it. Instead use componentDidMount.
  - Reason is that if you always centralize all of your data loading stuff inside of componentDidMount method, it is going to lead to more clear code.
- componentDidUpdate
  - It gets called everytime that a component is updated in case the state changes or the component gets a new set of props from its parent etc.
  - This would be a good location to do some data loading that needs to be done every single time that a component is updated.
  - A good example is that if we wanted to make some type of network request every single time that user clicks on a button or every single time that they enter some text into an input or every single time that we get some new props from a parent component.
- componentWillUnmount
  - It is used when we remove component from the screen and we need to do some clean-up after it.
  - It would be using frequently when we work with non react libraries such as using Google maps inside of a react application.
- There are other three lifecycles. shouldComponentUpdate, getDerivedStateFromProps, getSnapshotBeforeUpdate. However, these methods are rarely used.

## 25. Adding Some Styling

- When a css file is imported to js file, webpack is going to see that we are importing a css file. It is going to take the contents out of there and then stick it into the index.html file.

## 26. Avoiding Conditionals in render()

- In general, anytime we make a component we always try as much as possible to do not have multiple 'return' statement in render method.
- If we ever have to have conditional logic, we are always going to instead put it into a helper method.

```js
renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return (
        <SeasonDisplay
          lat={this.state.lat}
          errorMessage={this.state.errorMessage}
        />
      );
    } else {
      return <Spinner />;
    }
  }
```

## 27. App Overview

- Stuff to still figure out
  - How do we get feedback from the user? (user-interaction, event)
  - How do we fetch data from some outside API or server?
  - How do we show lists of records?

## 28. More on Controlled Element

- Input working flow
  - User types in input
  - Callback gets invoked
  - We call setState with the new value
  - Component rerenders
  - Input is told what its value is (coming from state) (whatever we assign to the value prop is what the input is going to show)
- The key idea is that we are storing information inside of react components on state property not inside the DOM. (input value indicates 'go look at state to get current value')
- In order words, user types the input, the input know what the text is. And then we call onChange and inform the component about the new input. And then we re-render the component, we set the value of the input with essentially the value that is already in there.
- React application driving and storing all the data not HTML side.

## 29. Axios vs Fetch

- Axios
  - Third party package
- Fetch
  - Function built into modern browsers
  - But fetch is more basic and lower level function to use to fetch data.

## 30. Handling Requests with Async/Await

- Component renders itself one time with no list of images
- onSearchSubmit method called
- Request made to unsplash
- ...wait...
- Request complete
- Set image data on state of App component
- App component re-renders and shows images

## 31. Creating Custom Clients

- Nice thing about axios is that you can kind of set up a pre-configured instance of the axios client that has default properties set for where it is going to make a request to, headers and even params.
- Create a file only for using axios.
- create method is going to create an instance of the axios client with a couple of defaulted properties. In order wors it allows us to create a customized little copy of that is customized just towards making requests to some specific url with headers.

## 32. Accessing the DOM with Refs

- What we are going to do?
  - Let the ImageCard render itself and its image
  - Reach into the DOM and figure out the height of the image
  - Set the image height on state to get the component to rerender
- When re-rendering, assign a 'grid-row-end' to make sure the image takes up the appropriate space When we want to access DOM elements directly using react, we make use of 'ref' system.
- React Refs
  - It gives access to a single DOM element.
  - We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props.

```js
 constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef.current.clientHeight);
  }

```

- However, 0 will be printed out in console.
- Reason is the instant after we have rendered the image in componentDidMount method, the image itself has not actually loaded. Because a DOM element is going to attempt to make a request to some outside service to actually load up the raw image file. (Reaching out to the url that we are referencing and downloading the image.)
- In order words, the reason of we see 0 for every one of these results is because we are a console.log in these values out before we have even had a chance to load the image up.

## 33. Callbacks on Image Load

- In order to fix this, we are going to reference the 'this.imageRef.current' and add event-listener to it.

```js
componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };
```

## 34. Reminder on Event Handlers

- Do not assign the value property to input tag without onChange property.

## 35. Accessing the Youtube API

- React app is goint to make use of axios library.
- It is going to make a network request over to the YouTube API.
- YouTube API is then going to respond to us with a list of videos to show on the screen.
- The list of videos is going to be an array of objects where every object represents a different videos.
- But first, get the API key at console.developers.google.com

## 36. Deeply Nested Callbacks

- When we want to communicate from a child's component back up to some parent component, we usually make use of a callback.
- Beware of a syntax just function call or arrow function in onClick method.
- reference : https://www.udemy.com/react-redux/learn/v4/t/lecture/12531374?start=0

```js
// this
<div onClick={() => onVideoSelect(video)} className="video-item item">
  <img
    className="ui image"
    src={video.snippet.thumbnails.medium.url}
    key={video.id.videoId}
  />
   <div className="content">
    <div className="header">{video.snippet.title}</div>
  </div>
</div>
// and this works differently
<div onClick={onVideoSelect(video)} className="video-item item">
  <img
    className="ui image"
    src={video.snippet.thumbnails.medium.url}
    key={video.id.videoId}
  />
  <div className="content">
    <div className="header">{video.snippet.title}</div>
  </div>
</div>
```

## 37. Displaying a Video Player

- iframe is like any other HTML tag such as div or a span
- But iframe is going to attempt to make a request to some outside website that the user is currently visiting on the screen.
- Therefore, we are going to create iframe element and tell it to make a request on its own without any Ajax stuff over to some very specific YouTube address.

```js
<div className="ui embed">
  <iframe src={`https://www.youtube.com/emb{video.id.videoId}`} />
</div>
```

## 38. What is Redux?

- State management library
- Makes creating complex application easier
- Not required to create a React app
- Not explicitly designed to work with React

## 39. Redux by Analogy

- How we are going to study redux?
  - Story(analogy) to help you understand Redux
  - Write some code in Codepen with Redux only
  - Work on a React App
  - Understand how to integrate React with Redux
- Redux Cycle (Insurance Company metaphor)
  - Action Creator (Person dropping off the form)
    - It is a function that is going to create or return a plain JS object
  - Action (the form)
    - JS object that created by the creator
    - It's purpose is to describe some change that we want to make to the data inside of our application
    - It has type property and payload property
      - type property
        - type property on in action describes some change that we want to make inside of our data
      - payload property
        - It describes some contexts around the change that we want to make
  - Dispatch (form receiver)
    - It is going to take in action and make copies of that object and then pass it off to a bunch of different places inside of an application
  - Reducers (Departments)
    - What dispatch does leads us to reducer.
    - It is a function for taking in an action and some existing amount of data.
    - It is going to process that action and then make some change to the data and then return it so that it can then be centralized in some other location.
  - State (Compiled department data)
    - In redux, state property is a central repository of all information that has been created by our reducers.
    - All the information gets consolidated inside the state object so that the react application can very easily reach in to our redux application and get access to all of the data of the application.
    - In that way our react app does not have to go around to each separate reducer.
  - Store
    - It is the assembly of a collection of different reducers and action creators

## 40. Modeling with Redux

- How to create action creator and action

```js
// People dropping off a form (action creator)
const createPolicy = (name, amount) => {
  return {
    // action
    type: "CREATE_POLICY",
    payload: {
      name,
      amount
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      amountOfMoneyToCollect
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name
    }
  };
};
```

- How to create reducers and dispatch data, get data

```js
// Reducers (Departments)
const claimHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // we care about this action (Form)
    return [...oldListOfClaims, action.payload];
  }
  // we don't care the action (form!)
  return oldListOfClaims;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }

  return listOfPolicies;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amountOfMoneyToCollect;
  }
  return bagOfMoney;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  // Each of these variables are the names of our different reducers
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies
});

// store object represents entire redux application
// It contains references to all of our different reducers and to all of our state produced by those reducers
const store = createStore(ourDepartments);

// we want to pass the dispatch function an action when we sent it in action
store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Jim", 30));
store.dispatch(createPolicy("Max", 40)); // total 190

store.dispatch(createPolicy("Max", 120)); // total 70 left
store.dispatch(createPolicy("Max", 50)); // total 20 left

store.dispatch(deletePolicy("Bob"));

// It is a function that is going to essentially get our entire assembled repository of data
store.getStaste();
```

- The goal of reducer is to take some existing data, some action and then modify and return that existing data based upon the contents of an action.

## 41. Important Redux Notes

- Action Creator -> Action -> dispatch -> Reducers -> State -> Wait until we need to update state again
- Anytime we want to change the state or the data of an application, we are going to call an action creator.
- Calling an action creator is going to produce an action object. It describes exactly how we want to change data inside of application that action object gets fed to dispatch function.
- This is going to make copies action obeject and feed those copies to each of different reducers.
- Reducers run and they are going to process those actions modify their data and then eventually return some new data.
- The data gets returned gets form into some new state object. 
- Then we wait until we need to somehow updates our state again at some point in the future.
- Each object that store calls such as store.dispatch(), store.getState() is separate execution of entire redux cycle. So at any point in time along the application, we can take this store obejct and pull our state out of it and read the current state where the current data for the application.
- We can only modify the state object(assembly of all the data) through the use of the dispatch function and the action creator and action. There is no way that we can somehow manually reach into the store and modify the state in there manually.

## 42. React-Redux

- React-Redux is thrid library that we are going to use to make sure that react in redux can talk to each other. 
- It has a bunch of helper functions inside of it to get redux to work nicely with react.
