- Server Side Templating

  - Back-end server creates an HTML document and sends it to the user
  - This HTML document is fully rendered HTML document
  - User visits page -> HTTP request to server -> New HTML Document -> User clicks a link -> HTTP request to server -> New HTML Document

- Single Page App

  - Server sends a bare-bones HTML doc to the user.
  - After bare-bones HTML loads up, JavaScript runs on the users machine to assemble a full webpage
  - User visits page -> HTTP request to server -> New HTML Document -> React/Angular boots up, shows page -> User clicks link -> React/Angular shows new content
  - In SPA, we have a huge pile of JavaScript that is being shipped down to user's browser.

- What is JavaScript Module?

  - It is a single JavaScript file contains some small amount of code.
  - The benefit of this approach is gets a lot more clear the code is located in our project.
  - but if JS is split up in module we need to start to think about <u>particular order</u> in which are codes excuted.
  - also many JS files in HTTP connection is a bad idea for performance stand point : <u>more files we have, slower load time for pages</u>.
  - **And this is exactly where Webpack comes into play**

- The Purpose of Webpack

  - The purpose of webpack is take a big collection of tiny little JS modules and **merge them all into one big JS file**.
  - And also ensuring that each module is **executed in the correct order**.
