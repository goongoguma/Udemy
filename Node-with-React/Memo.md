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
