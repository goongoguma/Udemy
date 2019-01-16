1. Server Side Templating

- Back-end server creates an HTML document and sends it to the user
- This HTML document is fully rendered HTML document
- User visits page -> HTTP request to server -> New HTML Document -> User clicks a link -> HTTP request to server -> New HTML Document

2. Single Page App

- Server sends a bare-bones HTML doc to the user.
- After bare-bones HTML loads up, JavaScript runs on the users machine to assemble a full webpage
- User visits page -> HTTP request to server -> New HTML Document -> React/Angular boots up, shows page -> User clicks link -> React/Angular shows new content
- In SPA, we have a huge pile of JavaScript that is being shipped down to user's browser.

3. What is JavaScript Module?

- It is a single JavaScript file contains some small amount of code.
- The benefit of this approach is gets a lot more clear the code is located in our project.
- but if JS is split up in module we need to start to think about <u>particular order</u> in which are codes excuted.
- also many JS files in HTTP connection is a bad idea for performance stand point : <u>more files we have, slower load time for pages</u>.
- **And this is exactly where Webpack comes into play**

4. The Purpose of Webpack

- The purpose of webpack is take a big collection of tiny little JS modules and **merge them all into one big JS file**.
- And also ensuring that each module is **executed in the correct order**.

5. Module System

- Common JS
  - It is implented by node.js
  - Common Syntax : require, module.exports
- AMD : require, define
  - Asynchronous Module Definition
  - Commonly used in front-end applications where different modules of code can be loaded up asynchronously
  - Common Syntax : require, define
- ES2015 : import, export
  - Most popular in module world
  - Common Syntax : import, export

6. Webpack Installation and Configuration

- Webpack is gonna read contents in webpack.config.js and based on the instruction we have provided inside of it, takes some operation on code base.
- Two minimum properties
  - The Entry Property
    - The file serves up as the root of an application. (it is convention to name it as index.js).
    - It only imports code to it which means entry property does not depend upon anything else.
    - It is a first file that executed when application starts up in the browser.
    - It is a start of module building process.
  - The Output Property
    - It tells webpack where to take bundle.js that is formed up at all over JS modules and where to save it and what to name it.
    - It is a form of object and contains two properties
      - path : where the ouput file is saved to also use absolute path. (use path module _const path = require('path').resolve()_)
      - filename : what webpack should call the file that actually created (it is convention to name it as bundle.js).
