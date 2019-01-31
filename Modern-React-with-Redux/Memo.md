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
32. ref 사용법
33. 콜백과 이미지 로딩
34. 이벤트 핸들러 작성할때의 주의점
35. Youtube API 사용해보기
36. 콜백을 사용해 부모 컴포넌트의 상태 바꿔주기
37. 비디오앱 완성
38. 리덕스에 대해서1
39. 리덕스에 대해서2
40. 리덕스 써보기
41. 리덕스 키노트
42. React-Redux 라이브러리
43. React와 Redux를 이용해 앱 만들기
44. 앱 Overview
45. Provider 사용하기
46. Connect 사용하기
47. mapStateToProps를 사용해서 state 가져오기
48. 중간정리
49. 컴포넌트에서 action creators 불러오기
50. 왜 컴포넌트를 import하고 다시 connect에 넣는지?
51. 함수형 컴포넌트를 이용해 connect 사용해보기
52. 정리하기
53. Redux-Thunk를 이용해 앱 만들어보기
54. 리덕스를 이용해 데이터 불러오기
55. 더미 action creator 연결해주기
56. Axios와 Action creator를 이용해 서버에 데이터 가져오기
57. Action creator에서 비동기 요청 에러 1
58. Action creator에서 비동기 요청 에러 2
59. 리덕스 미들웨어
60. Redux-Thunk의 역할
61. 비동기 action creator 만드는법
62. 리듀서의 규칙 1
63. 리듀서의 규칙 2
64. 상태를 변형시켜도 된다 하지만...
65. 리듀서 업데이트를 위해 안전하게 객체 변형시키는법
66. 비동기 요청을 통해 서버에서 데이터를 가져오는 과정
67. 어떻게 유저 정보를 보여줄것인가?
68. mapStateToProps를 이용해 필요한 정보 가져오기
69. 반복요청 문제 발생
70. memoize를 통한 문제 해결방법 
71. 다른 방법
72. 새로운 action creator를 생성함으로써 문제 해결방법
73. 새로운 action creator에서 유저의 id를 이용해 필요한 정보 가져오기
74. redux-thunk 정리
75. Streaming App intro
76. 앱 만들때의 어려운점
77. 리액트 라우터 소개 
78. 리액트 라우터가 작동법
79. exact 키워드
80. 리액트 라우터에서 a태그를 쓰면 안되는 이유
81. a태그 대신 Link태그 사용하기
82. 여러 타입의 라우터들
83. 앱 구성요소 컴포넌트
84. 헤더 컴포넌트 만들기
85. 에러 : You should not use Link outside a Router occur
86. Email/Password Authentication vs OAuth Authentication
87.  OAuth for Servers vs Browser Apps

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
    - It is a function that is going to create or return a plain JS object(action)
  - Action (the form)
    - JS object that created by the creator
    - It's purpose is to describe some change that we want to make to the data inside of our application
    - It has type property and payload property
      - type property
        - type property in action describes some change that we want to make inside of our data
      - payload property
        - It describes some contexts around the change that we want to make
  - Dispatch (form receiver)
    - It is going to take in action and make copies of that object and then pass it off to a bunch of different places inside of an application
  - Reducers (Departments)
    - What dispatch does leads us to reducer.
    - It is a function for taking in an action and some existing amount of data.
    - It is going to process that action and then make some change to the data and then return it so that it can then be centralized in some other location(state).
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
    return listOfPolicies.filter(policy => policy !== action.payload.name);
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
  accounting,
  claimHistory,
  policies
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
- This is going to make copies action object and feed those copies to each of different reducers.
- Reducers run and they are going to process those actions modify their data and then eventually return some new data.
- The data gets returned gets form into some new state object.
- Then we wait until we need to somehow updates our state again at some point in the future.
- Each object that store calls such as store.dispatch(), store.getState() is separate execution of entire redux cycle. So at any point in time along the application, we can take this store obejct and pull our state out of it and read the current state where the current data for the application.
- We can only modify the state object(assembly of all the data) through the use of the dispatch function and the action creator and action. There is no way that we can somehow manually reach into the store and modify the state.

## 42. React-Redux

- React-Redux is thrid library that we are going to use to make sure that react in redux can talk to each other.
- It has a bunch of helper functions inside of it to get redux to work nicely with react.

## 43. Song app Overview

- This time we are going to use react with redux to build the app
- We are going to create two reducers(Song list reducer, Selected song reducer) and one action creators(select song) into redux side application.
- Using action creator, we are going to change the state.
- If you want to change what the currently selected song is we are gong to call the action creator(select song). That will dispatch an action and tell selected song reducer to update its data and reflect the new current present picked song.

## 44. How React-Redux Works?

- We are going to create two new components (Provider, Connect) using react-redux.
- create store that contains all the reducers and pass it as prop in Provider components.(Provider component is going to be rendered at the top of application hierarchy even above the App component. So technically we are going to show the App component inside of Provider component).
- Then Provider component is going to have eternal reference to the store. (Provider is literally providing information to all of the different components inside of the application.)
- After that we are going to find every component inside of the application that needs to somehow access the data that is stored inside of the Store (like SongList component).
- Therfore we are going to create Connect component right above(in the hierarchy) the SongList component. So SongList component is going to be wrapped with Connect component.
- Connect component is very special. Because it communicates with the Provider component not through props but a completely different system called context system.
- (context system allows any parent component to communicate directly with any child component even if there are other components in between them.)
- So at some point, when we put the Connect component in there, we are going to configure the Connect component and tell it when it gets rendered on the screen(when it renders the SongList as a child), it needs to reach back up Provider component and tell it that needs to get the list of songs that are contained within the store.
- Connect component in turn, take the list of songs and pass it as a prop down into our SongList component.
- We call action creator, we take the action that gets returned and we send it into the store.dispatch function.
- _Entire flow is essentially we are going to create the Provider component and pass it as a reference to redux store then anytime we have a component that needs to interact with the redux store(SongList component in this case), it is going to be wrapped up with Connect component._
- _Then configure the Connect component by telling it what different pieces of states we want out of our store and what different action creators we want to have wired up as well_
- _After that Connect component is going to makes sure that all the data(both the state and the action creators) shows up inside of our component as props._

## 45. Wiring Up the Provider

- When we make use of the react-redux library, we don't usually mess around with the store directly.
- Instead we pass it off to the provider and it is essentially takes care of everything from there.

```js
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
```

## 46. The Connect Function

- We are able to connect to Provider component using Connect function

```js
class SongList extends React.Component {
  render() {
    return <div>SongList</div>;
  }
}

// connect function is called twice. (function inside of another function)
export default connect()(SongList);
```

## 47. Configuring Connect with MapStateToProps

- We are going to specifically tell the connect function that we want to get a list of songs out of the redux store from the Provider.
- So anytime that our list of songs and inside of our store changes, Provider is going to automatically notify the Connect component.
- Then it is going to pass our list of songs down to our SongList component.
- After defining mapStateToProps function and then going to take it and pass it as the first argument to the Connect function.
- state argument in mapStateToProps is essentially going to be our entire list of songs from the song list reducer.
- We can figure Connect component by passing it a function.
- The object returned from mapStateToProps function is going to show up as props inside of the component

```js
class SongList extends React.Component {
  render() {
    // this.props === {songs: state.songs}
    return <div>SongList</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
```

## 48. 정리하자면...

1.  reducer 폴더안에서 index.js를 생성. index.js는 안에 있는 reducer 함수들을 combinReducers라는 객체로 묶어 export한다.
2.  메인 index.js 파일은 redux의 Provider, createStore 그리고 reducer 폴더에서 export한 index.js를 reducers라는 이름으로 import한다.
3.  App 컴포넌트가 SongList 컴포넌트를 반환하고 있으므로 App 컴포넌트를 Provider 컴포넌트로 감싸고 props 형식으로 createStore(reducers)를 store라는 이름으로 내려준다.
4.  Provider와 연결하기 위해 SongList 컴포넌트에 connect()()를 만들어준 뒤 두번째 인수에 SongList 컴포넌트를 입력
5.  mapStateToProps 함수를 만들어 state를 인수로 받았는데 이 state는 reducer에 담긴 모든 정보를 포함하고 있다. state에서 원하는 정보를 return한 뒤 connect의 첫번째 인수로 mapStateToProps를 넣는다. 참고로 반환된 값(객체)는 내려받은 값이기 때문에 props와 같다고 할 수 있다.

## 49. Calling Action Creators from Components

- Connect component is going to be used not only to get data out of our store but it can also be used to get action creators correctly into the SongList.
- And put it into as a second argument of Connect function in the form of object.

```js
export default connect(
  // these are all props
  mapStateToProps,
  { selectSong }
)(SongList);
```

- Connect function is going to take selectSong action creator and pass it into the component as a prop inside of event-handler.
- When selectSong is called, it is going to automatically take the action that gets returned and send it it to redux's dispatch function.
- _Importantly, you must dispatch an action to update the store. You cannot directly modify props by doing this.props.something = 'some new value". What Stephen is saying in this lecture is that when we update our Redux store thru a dispatched action, mapStateToProps will automatically rerun and return to us this new state object._

## 50. Redux is Not Magic

- Redux does not automatically detect action creators being called.
- Redux does not automatically detect a function returning an object that is an action.
- selectSong is not a normal JS function. It is an action. However, redux does not recognize selectSong as what it is automatically.
- If we want to make sure that an action eventually makes its way over to reducers, we have to take the action that gets returned and we have to pass it into the dispatch function.
- If we just use function call with arguments none of these function calls are going to update the store.
- Function call returns the actions but never got sent into redux.
- When we pass action creators into the connect function, it does a special operation on the functions inside of the object.
- connect functions include inside the object, it wraps them up in another JS function. When we call the new JS function, _the connect function is going to automatically calls action creator, it is going to automatically take the action that gets returned and call dispatch function for us._
- So anytime we want to call an action creator from a component, we are always going to pass it into connect function.

## 51. Functional Components with Connect

- SongDetail component has no functionality tied to it such as event handler that causes a change to a redux state. So we do not need to wire up any action creators to our songDetail component.

## 52. Conditional Rendering and Wrappin up

- In integrating react and redux, we are going to create our components as we usually do.
- We are going to then select some very specific components inside of our application that need to receive some information or need to make changes to the state
- if we need to make changes to the state or receive information, we are going to import that connect function or component and then at the bottom of the file we can define a mapStateToProps function.
- And then pass that function as the first argument in connect function, actual component that we care about as a second function call.

## 53. Initial App Setup

- Redux-Thunk
  - Middleware is a function that are going to slightly change the behavior of the redux store and help us make requests in a redux application.
  - Middleware applies to the library 'redux'
  - Redux-Thunk is a middleware that is going to help us make network requests from the redux side of app.

## 54. How to Fetch Data in a Redux App

- General Data Loading with Redux
  - (This is a common pattern)
  1. Component gets rendered onto the screen
  2. Component's 'componentDidMount' lifecycle method gets called
  3. We call action creator from 'componentDidMount'
  - (From 1 to 3, Components are generally responsible for fetching data they need by calling an action creator)
  4. Action creator runs code to make an API request
  5. API responds with data
  6. Action creator returns an 'action' with the fetched data on the 'payload' property
  - (From 4 to 6, Action creators are responsible for making API requests and we are going to use Redux-Thunk)
  7. Some reducer sees the action, returns the data off the 'payload'
  8. Because we generated some new state obejct, redux/react-redux cause our React app to be rendered
  - (From 7 to 8, We get fetched data into a component by generating new state in our redux store, then getting that into our component through mapStateToProps)

## 55. Wiring Up an Action Creator

- Set up the dummy action creator and imports it in PostList.js
- And put the creator into connect function and call it using props in componenDidMount method. (step from 1 to 3)

```js
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>Post List</div>;
  }
}

export default connect(
  null,
  { fetchPosts }
)(PostList);
```

## 56. Making a Request From an Action Creator

```js
export const fetchPosts = async () => {
  const res = await jsonPlaceholder.get("/posts");
  return {
    type: "FETCH-POSTS",
    payload: res
  };
};
```

- The code seems right but that is a bad approach because we are specifically breaking the rules of redux and action creator.
- When you see the console. You got an arror saying 'Actions must be plain objects. Use custom middleware for async actions.'

## 57. Understanding Async Action Creators

- Let's find out the problem
- You might be asked for interview question.
- What is wrong with 'fetchPosts'?

  - When you go back to action creator file and look at the function, it looks like the function returning a plain JS object. In fact, it is not!!
  - Since the code is transfiled by babel to ES5 code, when babel transfiles async/await function which are functions that do not exist in ES5, those two become a huge chunk of syntax that using switch method and returns request object. That is why the action creator is not working as expected.

  ```js
  export const fetchPosts = async () => {
    // BAD APPROACH!!
    const res = await jsonPlaceholder.get("/posts");
    return {
      type: "FETCH-POSTS",
      payload: res
    };
  };

  // Above code is transfiled by babel to ES5 like below code

  export const fetchPosts = async() => {
    case 0:
    // request object is returned not plain object
      return jsonPlaceholder.get('/posts)
    case 1:
      return { type: 'FETCH_POSTS', payload: response};
  }
  ```

## 58. More on Async Action Creators

- We might think we can use promise instead async and await?
- If we do that by the time our action gets to a reducer, we will not have fetched our data!
- When the data flows from action creator to reducers, all of those steps are going to be executed in a fraction of a fraction of a second.
- But that causes an issue with the fact that we are making an asynchronous requests.
- When action creator called, we are going to make the request over to Typicode API and that request take some unknown amount of time to eventaully get a response back from that API.
- So by the time we finally get a response from the API, our action has long since been processed by our reducers.
- The reducers have already ran and they have looked inside that promise object and thinks 'the request is not completed and there is nothing that we can do inside of the reudcers to somehow delay them from running.'
- So
  ```js
  return {
    type: "FETCH-POSTS",
    payload: promise
  };
  ```
  this alternative syntax, it gets sent off to the reducers but all happened so quickly that it happens and completes itself way before ever get any data back from our API right below.

```js
const res = await jsonPlaceholder.get("/posts");
```

- In order words, even if we use this alternate syntax without the async/awaits, we would still run into an issue where we could not get access to our data.

## 59. Middlewares in Redux

- Synchronous action creator
  - It immediately retunrs an action object with all the relevant data attached that object and it is ready to be processed by a reducers.
  - Instantly returns an action with data ready to go.
- Asynchronous action creator
  - Takes some amount of time for it to get its data ready to go.
  - It is one that is going to require a little bit of time before it is ready to eventually dispatch an action.
  - Anytime that you have an action creator that makes a network request, it is always going to qualify as an async action creator.
  - If you want to have asynchonous action creator inside of a redux application, you have to install something called a middleware.
  - That is going to allow you to deal with these asynchronous action creators.
- Action that created by action creator goes to dispatch and be sent to middleware not reducers.
- We can have as many or as few middleware as we want.
- It is a function that gets called with every action we dispatch.
- It has the ability to _STOP, MODIFY_, or otherwise mess around with actions.
  - Simple example would be to create a middleware that simply console.log every action that you dispatch.
- Tons of open source middleware exist.
- Most popular use of middleware is for dealing with async actions.
- We are going to use a middleware called 'Redux-Thunk' to solve our async issues.

## 60. Behind the Scenes of Redux-Thunk

- What Redux-Thunk does?
  - Redux-Thunk is all purpose middleware that allows us to deal with asynchronous action creators but it also allows us to do many other things as well.
  - Noraml rules in vanila redux
    - Action creators must return action obejcts
    - Action must have a 'type' property
    - Actions can optionally have a 'payload'
  - Rules with Redux-Thunk
    - Action creators can return action objects
      (or)
    - Action creators can return functions!
    - (if you return a function, redux-thunk is going to automatically call that function for you)
    - If an action object gets returned, it must have a 'type'.
    - If an action object gets returned, it can optionally have a 'payload'.
- Redux-Thnk flow

  - When redux-thunk meets plain JS object, redux-thunk sends it to reducers
  - However, when redux-thunk meets a function, it works differently.
  - Redux-thunk invokes the function and it passes into the dispatch and getState functions as arguments.

  ```js
  export const fetchPosts = () => {
    return async (dispatch, getState) => {
      const res = await jsonPlaceholder.get("/posts");

      dispatch({ type: "FETCH_POSTS", payload: res.data });
    };
  };
  ```

  - We can pass actions into the dispatch function, those actions will be sent through all of our different middlewares and eventually forwarding it off to the reducers. In order words, dispatch funtion has unlimited power to initiate changes to the data on the redux side of app.
  - getState can be called on a redux store and that will return all of the data inside of it.
  - Through dispatch, we can change any data we want and getState, we can read or access any data that we want.
  - We wait for our requests to finish. In order words, we are going to wait to return or dispatch any action until we eventually get a response from our Typicode API.
  - Once we eventually get the response, _we are then going to use the dispatch function to manually dispatch an action at some point of time in the future._
  - After that we get a new action in form of a plain object or a function but mostly object. (when function gets returned, the flow goes again.)

## 61. Shortened Syntax with Redux-Thunk (how to create an asynchronous action creators)

- To wire up redux-thunk, import applyMiddleware from redux and thunk from redux-thunk in root index.js file.

  ```js
  import { createStore, applyMiddleware } from "redux";
  import thunk from "redux-thunk";

  const store = createStore(reducer, applyMiddleware(thunk));
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector("#root")
  );
  ```

- When we are making use of redux-thunk, we are not going to return any actions from the inner function anymore. (but you can make another action creator after action creator function.)
- Inside of the inner function, we do not need to return in action.
- If we are returning a function, if we ever want to dispatch an action, we will instead call the dispatch function manually with the action that we are trying to dispatch.
- Instead, call dispatch and pass in my action obejct.
- In redux-thunk, we can use async/await. Because once we have redux-thunk, the async/await syntax is only going to modify the return values of inner function. (remember that if we use async/await in a synchronous action creator, it causes us return a request object not an action )

```js
export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POST", payload: res });
  };
};
```

## 62. Rules of Reducers

- We are going to create a separate file for each reducer.
- The idea is that as we start to work on larger projects with many reducers, puttem all inside of one file is probably not going to scale too well.
- We are going to create another component called postReducer. It is responsible for watching for actions with type 'FETCH_POST' and anytime it sees that it is going to pull off the res that in all the data inside of it and add it into some array.
- Therefore we are going to eventually have a list of sorts with all of different posts that have been fetched from our API.

## 63. Return Values from Reducers

- Rules of Reducers
  - It must return any value besides of 'undefined'.
  - It produces 'state' or data to be used inside of you app using only previous state and the action (reducers are pure).
    - The first time the reducer gets called during that initialization process, it is going to receive two arguments.
    - The first argument is going to have a value of 'undefined'.
    - And then the second argument will be some action obejct.
    - The reducer takes these two arguments and returns some inital some state value.
    - But in many cases, we will defaulted to be the value of first argument as an empty array or empty string etc.
  - It must not return reach out of itsef(or function) to decide what value to return (reducers are pure).
    - Anytime that we call a reducer with an action and previous state value, reducer is not supposed to reach out of the function. In order words, reducers are not supposed to make an API request or try to read some file off a hard-drive or reach into DOM and try to pull some value out of a div or a label or input etc.
    - The only thing that we are going to return is some computation done on the two arguments.
  ```js
  // BAD!
  export default () => {
  return document.querySelector('input)
  };
  // GOOD!
  export default (prevState, action) => {
  return prevState + action // not literally thou
  };
  ```
  - It must not mutate its input 'state' argument.
  ```js
  export default (prevState, action) => {
    // BAD!
    state[0] = "Sam";
    state.pop();
    state.push();
    state.name = "Mike";
    state.age = 30;
  };
  ```
  - If you have a reducer that is always returning a number or a string, you do not need to worry about the mutataion rule. Because those values are immutable.
  - You only have to worry about mutation when you are working with an array or an object.

## 64. A Misleading Rule

- But the rule 'It must not mutate its input 'state' argument.' is extremely misleading. Possibly even false!
- Here is the truth
  _- YOU CAN MUTATE IT ALL DAY AND NOT SEE ANY ERRORS!_
  - However, there is one tiny little corner case in which mutating the state argument is going to land you in trouble.
  - To be honest, it is a lot easier to tell beginners to just not mutate the state argument than to tell them about this corner case and help them to understand.
  - The reason we say 'It must not mutate its input 'state' argument.' is that if you accidentally return the same value (returning prevState) that is pumped into your reducer, redux is going to say 'no difference. Here is the same object or array in memory.' And so we have done absolutely no updates to any data inside of an application, and the react app does not need to be rendered itself. In order words, you will never see any updated content appear on the screen.

## 65. Safe State Updates in Reducers

- (in object, order goes from right to left)
- {...state, name: 'Sam'} instead state.name = 'Sam'
- {...state, age: 30} instead state.age = 30
- {state, age: undefined} instead delete state.name (or you can use lodash library)

## 66. Dispatching Correct Values

- Why do we have two result for one console.log?
  - When the application first loads up inside of the browser, all of our reducers run one initial time.
  - So the instant the application loads up inside the browser, the postReducer runs with an action of some initialization type.
  - Whatever it is, it is not going to match the case 'FETCH_POSTS'. So, we are going to return default state value of an empty array.
  - Therefore, the application first boots up, we are going to have a state object that has a 'FETCH_POSTS' property and the property is going to contain the empty array.
  - After all of the reducers run, the react side of application is going to be rendered one time on the screen.
  - So the PostList component is going to be displayed on the screen one time.
  - During that initial one time, we are going to have the render method called and that is going to invoke the console.log empty array.
  - Immediately after the PostList component shows up on the screen, the _componentDidMount lifecycle_ method will be called and then we go through the entire process of running off to the API and fetching some data.
  - After we get some data back and dispatch the action to reducer, the reducer sees the action has a type of 'FETCH_POSTS', it returns whatever value is inside of the action.payload property.
  - Redux sees that we have not returned the same object in memory the second time the reducer ran. Instead we return a brand new value (action.payload).
  - So the PostList component is going to be rendered to the screen a second time. Also mapStateToProps is going to be called a second time, we are now going to get the new value of state.post and new props.posts property is going to show up inside of the component. The render method gets called again and we see the second result in console.log.
  - (action -> postReducer -> default value -> PostList component rendered -> componentDidMount in PostList component -> fetching data -> action -> reducer -> value in action.payload property -> Redux finds not the same value before -> PostList component -> mapStateToProps -> get a new value from state -> render method gets called -> second result shows up)

## 67. Displaying Users (Getting user information)

- How to get user information?
  - Fetch Posts
  - Show posts in PostList
  - Each element in PostList shows UserHeader component
  - UserHeader is given ID of user to show
  - Each UserHeader attempts to fetch its user
  - Fetch User
  - Show users in each UserHeader

## 68. Extracting Logic to MapStateToProps

- UserHeader component gets access to the user ID and it also gets access to the entire list of users.
- However the UserHeader component is not really well-suited to take the entire array of users. Because the purpose of the component is to show one singular user on the screen. But we are giving it way more data than it ever needs.
- It would be a lot better if we could figure out some way to pass it just the user that it cares about.
- In UserHeader component, mapStateToProps function seems just like a little bit unnecessary. Everytime we want to pull some data out of a component, we have to define this really repetitive function.
- But there is another way that would have been really nice to pull data out of the redux store.
- So essentially rather than finding the appropriate user inside of the component, we want to find it inside of mapStateToProps.
- We can refers props of the component using 'ownProps' object as a second argument of mapStateToProps function.
  ```js
  const mapStatetoProps = (state, ownProps) => {
    return {
      user: state.users.find(user => user.id === ownProps.userId)
    };
  };
  ```

## 69. That's the Issue! (overfetching users)

- When you see the network tab in developer tool, you will find out that the application requets for userId number 10 times in a row.
- Everytime that a UserHeader component is rendered on the screen, componentDidMount is called and fetch user with particular userId.
- So essentially becasue we are rendering out a hundred instances of UserHeader, the action creator gets called a hundred different times even though we are fetching some very very repetitive data.

## 70. One Time Memoization

- In order to repetitive data request, we use memoize library.
- Using \_.memoize, create new function.
- Do not use \_.memoize inside of fetchUser function. It won't work
- After create a new memoizefunction, connects it with fetchUser function

  ```js
  export const fetchUser = id => {
    return (dispatch, getState) => {
      _fetchUser(id, dispatch);
    };
  };

  // private function
  const _fetchUser = _.memoize(async (id, dispatch) => {
    const res = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: res.data });
  });
  ```

- However if you refetch the user some reason like if you have made a change to a user or if you know that the user data has been updated on your API etc.
- Unfortunately you would not be able to do it again using this action creator. So if you want to do it then you have to create another action creator that has the same logic except memoiztion step.
- So this is not the best solution.

## 71. Alternate Overfetching Solution

- We are going to create new action creator called 'fetchPostsAndUsers()'.
  - Logic that we are going to execute inside of the component
    - Call 'fetchPosts'
    - Get list of posts
    - Find all unique userId's from list of posts
    - Iterate over unique userId's
    - Call 'fetchUser' with each userId
  - fetchPostsAndUsers action creator is not going to have some logic inside of it to make a network request over to our API.

## 72. Action Creators in Action Creators.

- Create new action creator 'fetchPostsAndUsers'
- Inside of there, call other action creators
- However if we just call action creators inside of the new action creator, it is not going to be dispatched to reducers.
- So when we call action creators inside of the new action creator, we have to pass the result of calling those into the dispatch function.
- When action creator inside of fetachPostsAndUsers is called, redux-thunk is going to see the inner function of the action creator and invoke it and pass in dispatch as the first argument. So then the inner function is going to make a request over to API, get the list of posts and then it is going to dispatch its own action internally and start that entire process of updating the reducer.
- SO WHENVER WE CALL AN ACTION CREATOR FROM INSIDE OF ANOTHER ACTION CREATOR, WE NEED TO MAKE SURE THAT WE DISPATCH THE RESULT OF CALLING THE ACTION CREATOR.

  ```js
  export const fetchPostsAndUsers = () => {
    return async dispatch => {
      dispatch(fetchPosts());
    };
  };

  export const fetchPosts = () => {
    return async (dispatch, getState) => {
      const res = await jsonPlaceholder.get("/posts");

      dispatch({ type: "FETCH_POSTS", payload: res.data });
    };
  };
  ```

- But whenver we call fetchPosts that is going to initiate an asynchronous request over to the API.
- We need to somehow make sure that we do not attempt to get the our list of posts that have been fetched until fetchPosts action creator has completed and has fetched all the appropriate data.
- So we are going to put 'await' keyword in front of dispatch method in order to make sure that when we dispatch that action creator and the inner function eventually gets called, await keyword is essentially make sure that we wait for the API request to be completed before we move on and do things inside of new action creator.

```js
export const fetchPostsAndUsers = () => {
  return async dispatch => {
    await dispatch(fetchPosts());
  };
};
```

## 73. Finding Unique User Ids

- It is easy to get the state of post. We can use getState object to do it.
  ```js
   return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    console.log(getState().posts);
  };
  ```
- After we get the data from getState().posts, we need to iterate through it list of posts find a unique user IDs and then fetch user for each one. 
- To do that, we can use Lodash library, memoization step.
- lodash is working with the list of posts and pulling out the userIds and finding just the unique ones pretty easy and straightforward.
- We use lodash version of map to get all userId
  ```js
  _.map(getState().posts, "userId");
  ```
- And use _.uniq to return an array with the unique user ids
  ```js
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  console.log(userIds); // [1,2,3,4,5,6,7,8,9,10]
  ```
- Last thing to do is iterate over the variable userIds which contains the array of user ids for every id, we need to call fetchUser action creator.
  ```js
   userIds.forEach(id => dispatch(fetchUser(id)));
  ```
- No await keyword this time. Because we do not care at all about waiting for eash user to be fetched inside a fetchPosts users. (이미 필요한 데이터는 다 있으니까 기다릴 필요가 없음)
- And remove componentDidMount lifecycle from UserHeader component because the lifecycle method keeps attempting to fetch the data.  

## 74. App Wrapup

- Inside of a root index file, we had imported redux-thunk and then we wired it up to a store through the use of applyMiddleware. 
- applyMiddleware is a function from redux library itself, we passed it into second argument of the createStore call when we apply the middleware. 
- When we apply the middleware of redux-thunk, anytime we dispatch an action, the action will be first sent to redux-thunk and after redux-thunk, the action will be sent off to all of different reducers.
- When we wire up redux-thunk, it changed the rules of our action creators. 
- Which means inside of our action creator, we no longer had to create action creators that always returned in action object.
- Instead with redux-thunk, we could also optionally return a function.  
- If we return a function, it would be automatically called with the dispatch and getState arguments and that essentially gave us total control over changing or getting information out of our redux store. 
- Anytime that we expect to make an API request from an actual creator, we are always going to make use of something like redux-thunk. 
- When we return a function from our action creators, we use interesting syntax righ here:
```js
  export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: res.data });
  };
};
```
- The syntax right here is we have a function that returns a function (outer function => inner function). And it is very common syntax in redux-thunk.
- Alternate solution to solving overfetching issue, we created a new action creator that somehow called other action creators and made sure that we still dispatch the result of calling those action creators. 
  
```js
  export const fetchPostsAndUsers = () => {
      return async (dispatch, getState) => {
        await dispatch(fetchPosts());
        const userIds = _.uniq(_.map(getState().posts, "userId"));
        userIds.forEach(id => dispatch(fetchUser(id)));
      };
    };
```

- In reducer, in frist argument is what I refer to as states and whatever was returned from this reducer or the last time that it ran. 
- So we run this reducer over and over again, whenever we return shows up as the first argument. 
- We also learned that we usually make use of switch statment syntax inside of reducer. And it is very common pattern.
```js
  export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
```
- *And remember that anytime that we return some data from a reducer, we always have to return a new array or a new object or a different valued string or a different value number, if we expect redux to realize that we made a change to the data inside of our application.*
- If we ever just return the exact same object or array, redux has that very simple comparison where it just checks to see if that is the same object or array in memory.
- And if it is, redux says 'oh no data has changed' and it does not update the rest of your application and tell the react side of the app to actually re-render itself and pull down new state and show some new content on the screen.

## 75. Streaming App Outline

- We are going to have our react application running inside the user's browser.
- We are going to have a small API server that essentially lists out all streams or channels that video can watch.
- the API is going to record what streams or channels exist
- And we are going to have RTMP(Real Time Messaging Protocol) Server that is actually responsible for hadling the video streams itself. 
- RTMP server is very straightforward.

 ## 76. App Challenges

- Need to be able to navigate around to separate pages in our app 
- Need to allow user to login/logout
- Need to handle forms in Redux
- Need to master *CRUD(Create Read Update Destroy)* operations in React/Redux 
- Errors will likely occur! Need good error handling 

## 77. Intoroducing React Router

- React Router family
  - React Rounter
    - Core navigation library 
    - We do not install this manually
    - It is a core library of everything inside the react-router general project
    - It decides how to work with react, how to change content out depending upon some different rules and some other low level logic.
  - React Router Dom
    - Navigation for dom-based apps
    - To get an actual implementation of react-router that works inside of specifically the browser.
    - Anytime that you want to use react router on a project to handle navigation, you are always going to installing react router dom, not react router.
  - React Router Native
    - Navigation for React Native apps
  - React Router Redux
    - Bindings between Redux and React-Router (not necessary)
    - It is a library that is very similar to react-redux library. 
    - It is essentially a compatibility layer to get react router and redux to play along with each other. 

## 78. How React Router works?

- React router does not care that we went to a domain of localhost or we were at port 3000.
- Instead react router only cares about all the characters that are listed after the domain definition and the port definition. 
- So localhost:3000 is interpreted as being localhost:3000/
- If we go to localhost:3000/pageone, react router only cares about everything after the port and the domain. So react router would only care about /pageone. 
- When we created the application and loaded up inside the browser, we created an instance of the BrowserRouter component. 
- BrowserRouter component internally creates an object of its own called history object.
- This object is going to look at the inside of the address bar.
- It is going to extract just that portion of the url that react router curioust about (just everything after domain name and the port).
- History object is then going to communicate the path over to BrowserRouter and then BrowserRouter is then going to communicate that path down to route components. 
- The route components are going to decide either to show themselves or hide themselves depending upon the path inside of the url that the user is visiting, and the path property that it was passed when it was created. 

## 79. How Paths Get Matched

- Inside of react router application, we can very easily have multiple route components that match a given url and all show themselves to the user. 
- So by deeply nesting routes, we can customize how some part of our app looks depending upon the url 
- And we do not have to pass down some deep configuration through redux or props or something like that to configure how a very deeply nested child component renders itself.
- 'exact' keyword.
```js
<Route path="/" exact component={PageOne} />
```
  - A single route or single url or single path can be matched by different routes inside of application. 
  - When you add on a prop name of exact, it causes react router to change the rule that it uses for matching the path slightly. 
  - It essentially changes to extracted path equal the string path (extractedPth === path).
  - It only modifies the route that you add it to. 

## 80. How to Not Navigate with React Router

- Bad Navigation
  - You add an 'a tag' to your application with href='/pagetwo' and click it
  - Your browser makes a request to localhost:3000/pagetwo
  - Development server responds with index.html file
  - *Browser receives index.html file, dumps old HTML file it was showing (including all of your react/redux state data!)*
    - If you put anchor tags inside of your app and then you click on one, you are making a brand new request to some outside server that is going to return a brand new HTML document and then show it on the screen.
    - During the process, the normal operation of the browser is to dump all variables in memory which means all JS data gets entirely dumped. 
    - So that means that in the context of your react redux application, any data that you had loaded up like any API requests or user had typed in anything whatsoever is going to be 100% wiped. 
    - Therefore, you would have to refetched all the data at second time or have user typed all the data in. 
    - (You can check in developer console, network tab)
  - index.html file lists our JS files in script>tags 
  - browser downloads and executes these scripts
  - Our app starts up.

## 81. Navigating with React Router

- Instead of using href and 'a tag', use 'Link tag'.
```js
<Link to="/pagetwo">Navigate to PageTwo</Link>
```
- Using inspector, when you click 'Link tag', what actually showed up in Element console is 'a tag'.
- And also user does not get any additional requests being made for any html document.
- So when you use the 'Link tag', you are still showing an 'a tag' on the screen.
- What we want to do with 'Link tag'.
  - User wants to navigate to another page in our app
  - User clicks a 'Link' tag
  - *React router prevents the browser from navigating to the new page and fetching new index.html file!*
  - URL still changes
  - 'History' object sees updated url, takes it and sends it to BrowserRouter
  - BrowserRouter communicates the url down to all the different Route components
  - Route components rerender to show new set of components depending upon the path that the user is visiting.
- So when you make use of the 'Link tag', we are not dumping all of our react and JS data, we are just showing a different set of components on the screen.
- This is where Singl Page App(SPA) comes from.
  - It means that we are only loading up a single HTML document. 
  - We still allow the user to navigate around the application by clicking on various link tags.
  - But when they navigate around, they still are making use of the same document. 
  - We are just showing and hiding different sets of components based upon the url. 
  - This is how we handle navigation inside react router application. 
  - We are essentially tricking the user into thinking that they really are going to different pages. 
  - But in fact, we are just showing in hiding different components. 

## 82. Different Router Types

- BrowserRouter
  - Uses everything after Top Level Domain(.com, .net) or port as the 'path'
  - ex : localhost:3000/pagetwo
- HashRouter
  - Uses everything after a # as the 'path'
  - ex : localhose:3000/#/pagetwo
- MemoryRouter
  - Does not use the url to track navigation (same url wherever you go)
  - ex : localhost:3000/
- Deploy BrowserRouter could be very challenging.
- What is going on behind the scenes with the BrowserRouter
  - If you ask react development server for some resource that some route that is not defined, rather then returning a 404 error, the react app development server is going to respond with your index.html file and that is the key to how all of browser router works. 
  - If you ask for any route whatsoever, the react server is going to always respond with index.html file as opposed to returning a 404 error. 
  - This is important because all of our definitions are stuffed into the JS or client side of application. 
  - So an user goes over to our application and they click on link to navigate over to pagetwo and we refresh the page, we are making a request to our server for the route /pagetwo. 
  - And our dev server, if you click on the request and then click on response in network tab, it decides automatically return the html file. 
  - After browser loads up all html, it sees that there is a link inside, bundle.js file that contains all of our applications code. So Application loads up -> react router loads up -> history object that is created by BrowserRouter, inspects current url -> It seems that we are at the route of '/pagetwo' or whatsoever -> the history object tells the BrowserRouter, we are at '/pagetwo' -> BrowserRouter object tells routers inside of the object that we are at '/pagetwo' so render yourself appropriately.
- This mechanism of always responding with HTML file if route is undefined is not typical in any traditional server.
- Therefore, this is why it is so challenging to set up or deploy an application that makes use of the BrowserRouter.
- HashRouter
  - With HashRouter, you are supposed to be setting up your backend server do not take a long at anything after the hash.
  - If anyone ever makes requests to localhost:3000, you are always going to respond with index.html file. 
  - And your application loads up, the application will then look at whatever is after the hash and then use that to determine what content to show on the screen. 

## 83. Component Scaffolding

- Index Page : StreamList (/)
- Show Stream : StreamShow (/streams/show)
- Create Stream : StreamCreate (/streams/new)
- Edit Stream : StreamEdit (/streams/edit)
- Delete Stream : StreamDelete (/streams/delete)

## 84. Always Visible Components

- We want our head component to always be visible no matter what url, user is trying to look at. 
- In order to do so, we are going to add the header component to our app component outside of the BrowserRouter.
- If we have a component that is not listed inside the BrowserRouter, it will always be shown 100% of the time irrespective of what the current path is. 

## 85. Link Inside Routers

- Error : You should not use 'Link tag' outside a 'Router' occurs
- The error saying that any component that is not a child of our router cannot contain any react router related components. 
- So we are going to make sure that the App component renders the browser router as it still is but we are going to simply take our Header component and move it underneath the BrowserRouter.
- Because the Header component is not going to be wrapped up inside of route, the header will continue to always be visible. 
- BrowserRouter 아래에 있지만 Header 컴포넌트에 Route를 사용하지 않음으로써 화면에 렌더링되게 만든다는것. 
- So the Header component is a child of the BrowserRouter and so it can successfully make use of a link element.
  ```js
  </BrowserRouter>
      <div>
      <Header />
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/new" exact component={StreamCreate} />
      <Route path="/streams/edit" exact component={StreamEdit} />
      <Route path="/streams/delete" exact component={StreamDelete} />
      <Route path="/streams/show" component={StreamShow} />
    </div>
  </BrowserRouter>
  ```

## 86. OAuth-Based Authentication

- Email/Password Authentication
  - We store a record in a database with the user's email and password. 
  - When the user tries to login, we compare email/pw with whats stored in DB.
  - A user is 'logged in' when they enter the correct email/pw.
- OAuth Authentication
  - User authenticates with outside service provider (Google, Linkedin, Facebook).
  - User authorizes our app to access their information.
  - Outside provider tells us about the user.
  - We are trusting the outside provider to correctly handle identification of a user.
  - OAuth can be used for user identification in our app and our app making actions on behalf of user.
  - So OAuth is not only about authentication but also about letting our application get access to all that user's data on some outside service provider. 

## 87. OAuth for Servers vs Browser Apps

- OAuth for Servers
  - Results in a 'token' that a server can use to make requests on behalf of the user.
  - Usually used when we have an app that needs to access user data when they are not logged in.
  - Difficult to setup because we need to store a lot of info about the user.
- OAuth for JS Browser Apps
  - Results in a 'token' that a browser app can use to make requests on behalf of the user.
  - Usually used when we have an app that only needs to access user data while they are logged in.
  - Very easy to set up thanks to Google's JS lib to automate flow.
- Google OAuth Login Flow
  - User clicks 'Login with Google' button
  - We use google's JS lib to initiate OAuth process
  - Google's JS lib makes auth request to Google
  - Google displays confirmation screen to user in popup window
  - User accepts
  - Popup window closes
  - Google's JS library invokes a callback in our React/Redux app
  - Callback provided with 'authoriztion' token and profile info for user
  - If user happens to log out our application or Google servers, we are going to get another callback invoked. 
  - This callback is going to say 'user just logged out'.

## 88. Creating OAuth Credentials

- Steps for Setting Up OAuth
  - Create a new project at console.developers.google.com/
  - Set up OAuth confirmation screen
  - Generate an OAuth Client ID
  - Install Google's API library, initialize it with the OAuth Client ID
  - Make sure the library gets called anytime the user clicks on the 'Login with Google' button.

## 89. Wiring Up the Google API Library

- Unfortunately Google themselves do not offer the library over npm, we are just going to add a manual script tag into the index.html. 
  ```js
  <script src="https://apis.google.com/js/api.js"></script>
  ```
- In order to check the code is working, type 'gapi' in console. If it is, you are going to see object '{load: f}'.
- So we are going to create a new React component that is going to essentially wrap the the Google library and make sure our user do the entire OAuth process. 
- When you print out gapi in console, you will see that it only has a single function tied to it called '{load: f}'. 
- load means load up some internal library by making a follow up request over to Google servers and fetching some additional amount of JS code and then adding it essentially to Google library. 
- To do so, we are going to call 'gapi.load' and then we are going to pass in a 'clint:auth2'.
- gapi.load('client:auth2')
- we can run that line of code and we will see the additional request automatically made to fetch some additional JS code and load it up into that library.
- then we type 'gapi' again, some additional properties have been added inside of the object. 
- After we load up the additional library, we can then register or initialize it with our OAuth client id by calling 'gapi.client.init({clientId: 'clientId'})'
- gapi -> gapi.load('client:auth2') -> gapi.client.init({clientId: 'clientId'})
- We want to make GoogleAuth component loads up the client portion of the library one time when the component is first rendered onto the screen.
- In order to do that, we are going to use componentDidMount lifecycle in the component.
```js
componentDidMount() {
  window.gapi.load("client:auth2");
}
```
- So now, anytime that the GoogleAuth component is rendered onto the screen, we are going to try to load up the client portion of the library. 
- When we load up that library, it takes some amount of time for the library to reach over to Google servers and download some additional JS code. 
- Therefore, we need to get a callback of when that process is completed.
- And the callback function is only going to be called after 'client:auth2' library has been successfully loaded up gapi. 
  ```js
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.clinet.init({
        clientId:
          "123aslf12909vaojviwe"
      });
    });
  }
  ```
- So after we successfully load up the client library, we are going to initialize our appication with the clientId that we had generated. 
- And also we have to put another option in addition to clientId. It is 'scope'.
- In scope property, we are going to specify the different scopes that we want to load up when we take user or we want to fetch when the user goes through OAuth process. 
- (Scope is essentially talking about what different parts of the user's profile, email or the user account that we want to get access to)
- We want to access user's email. so add email as a string. 
  ```js
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "1042485390822-m5ktk6ebb54ucr797pj4u3psgn702qvu.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  ```
- But it is just going to initialize the library.
- It is not going to actually take the user goes through OAuth uprocess. 

reference : https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2getauthinstance

## 90. Sending a User Into the OAuth Flow

- In console, get a reference to that auth instance object.
  ```js
  const auth = gapi.auth2.getAuthInstance()
  ```
- variable auth contains many objects and you can check those in documentation.
- Trigger the flow for the user manually. 
  - so rather than clicking on any button or anything like that, we are going to just try to manually use methods we got to get the user to signIn.
  - Basically we need to call signIn method. 
  - When you call signIn method. login popup window apprears.
  - In order to check that user is signed in, type 'auth.isSignedIn.get() according to the document.
- In theory if we had asked for any other scopes around this user such as ability to modify their email or their Google Drive files, we could now use this library to modify those files or those emails.

## 91. Rendering Authentication Status

- What we are going to do?
  - Get a reference to the 'auth' object after it is initialized.
  - Figure out if the user is currently signed in.
  - Print their authentication status on the screen.




  

