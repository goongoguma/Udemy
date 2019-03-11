## Tutorial Inidex

- [1. App Flow](#1)
- [2. 사용 기술](#2)
- [3. App Overview](#3)

<h2 id="1">App User Flow Walkthrough</h2>

- User signs up via Google OAuth
- User pays for email credits via stripe
- User creates a new 'campaign'
- User enters list of emails to send survey to
- We send email to list of surveyees
- Surveyees click on link in email to provide feedback
- We tabulate feedback
- User can see report of all survey responses

<h2 id='2'>Tech Stack</h2>

- User signs up via Google OAuth
  - Express server + MongoDB + PassportJS
- User pays for email credits via stripe
  - Stripe + MongoDB
- User creates a new 'campaign'
  - React + Redux
- User enters list of emails to send survey to
  - React + Redux + Redux Form
- We send email to list of surveyees
  - Email Provider
- Surveyees click on link in email to provide feedback
  - Email Provider + Express + Mongo
- We tabulate feedback
  - Mongo?
- User can see report of all survey responses
  - Mongo + React + Redux

<h2 id='3'>Application Architecture</h2>

- When the user goes to the app, we are going to send them some files that will get some HTML to appear on the screen. That is going to be our React side of our application.
- But React side of application does not really know exactly what to show to the user. It needs some amount of data to show the right stuff.
- Therefore in our application, we are going to use MongoDB to record and store all the different survyes and all the different emails that we sent tout to people over time.
- So one of the chief problems inside of our application that we are going to learn how to solve is to communicate effectively all the data that we store inside of our MongoDB database with our react application.
- But the React application that we are going to put together is never going to talk directly to the MongoDB database.
- Instead we are going to put an express api between React and MongoDB.
- Express api is going to contain a bunch of business logic to take incoming requests from the React application, pull some information out of MongoDB database and then send that information back to the React side of our app.
- Express api and React application are going to be communicating entirely through a HTTP request or Ajax request.
- Every single one of requests is going to contain some amount of JSON.

<h2 id='4'>Relationship Between Node and Express</h2>

- `git init` and `npm install --save express` in server folder that we created
- Difference between Node and Express
  - Node
    - JS runtime used to execute code outside of the browser
    - Traditionally JS runs inside of browser but overtime people realized that they wanted to use JS in other locations as in outside the browser and that is the source of the NodeJS project.
  - Express
    - Library that runs in the Node runtime. It has helpers to make dealing with HTTP traffic easier
    - Express as being a little collection of functions or helpers for making working with the HTTP aspects of NodeJs a little bit easier.
- What node and express do?
  - First thing to understand is that when you are running some server on your local machine, your server is going to be listening for HTTP traffic on a single individual port.
  - Port as being like a little door through which traffic like HTTP request can be routed.
  - We are going to configure node and express to listen to traffic that is attempting to access a very specific port on our local machine.
  - NodeJS specifically is going to do what is listening for traffic on that port and waits for some information to flow in through it. And it is going to take that information that flows in from incoming HTTP request and handed off to the Express side of our application.
  - Express is then going to look at the request and it is going to decide what little bit of logic inside of the Express application that we are building, is going to handle or respond to this incoming request .
  - In Express, we write collections of what are called `Route Handlers`.
  - `Route Handlers` are used to handle HTTP requests that are asking for a very specific service.
    - ex. `Route Handler #1` is responsible for authenticatinig a user, `Route Handler #2` is responsible for logging out a user.
  - And gerenates outgoing response.
  - It sent back to running Node process and notable then respond to incoming request with response that we author.

<h2 id='5'>Generating Express Apps</h2>

- How to use common JS module before ES6.
  ```js
  const express = require("express");
  ```
- calling express function, it generates a new application that represents a running express app.
  ```js
  const app = express();
  ```
- The `app` object is used to set up configuration that will listen for incoming requests that are being routed to the Express side for Node side and then route those requests on to different route handlers.
- So all of the different route handlers that we are ging to be creating over time will be all associated or registered with `app` object.
- Write the code below

  ```js
  app.get("/", (req, res) => {
    res.send({ hi: "there" });
  });

  app.listen(5000);
  ```

- When you go to `localhose:5000` you are going to see the message `{ hi: 'there' }`.
- Let's figure out what is going on in next section.

<h2 id='6'>Express Route Handlers</h2>

```js
// Route Handler
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);
```

- `app` : Express App to register this route handler with.
- `get` : Watch for incoming requests with specific method.
  - get : Get info
  - post : Send info
  - put : update all the properties of something
  - delete : Delete something
  - patch : Update one or two properties of something
- By calling `app.get()`, we are creating a brand new route handler.
- `/` : Watch for incoming requests trying to access '/'. It is called `route portion of the handler`.
- `req` : Object representing the incoming request. It has a bunch of data that says a little bit about who is making the request and some associated data with it.
- `res` : Object representing the outgoing response.
- `res.send({hi:'there'})` : Immediately send some JSON back to who ever made this request.
- The function of route handler is executed every single time a single request comes in and attempting to make a get request to the route of '/'.
- `app.listen(5000)` : This instructs express to tell Node that it wants to listen for incoming traffic on port 5000.
