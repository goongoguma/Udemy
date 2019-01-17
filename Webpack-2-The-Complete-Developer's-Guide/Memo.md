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
      - path : where the ouput file is saved to, also use absolute path. (use path module _const path = require('path').resolve()_)
      - filename : what webpack should call the file that actually created (it is convention to name it as bundle.js).

7.  Running Webpack

- Command ran at terminal

  - webpack
    - Effect
      - Out of all globally installed modules, find the one called webpack and run it.
  - npm run build
    - Effect
      - Run the copy of 'webpack' stored in the 'node_modules' directory

- In order to run webpack, you have to set package.json file.
- in "scripts", set command word and what to execute with it

```js
"scripts": {
 "build": "webpack"
},
```

- type 'npm run build' in the terminal
- for a note, when a module is installed globally, you can have only one version of module installed at a time. Therfore when several projects use different version of webpack, it would be pretty hard to adjust the version using global modules. This problem can easily be solved by just installing the module locally and depending upon locally installed webpack.
- when npm run build is executed, the size of bundle.js is much bigger than sum of the other files that actually used inside of bundle.

8.  The Bundle.js File

- What happens inside of bundle.js file is webpack takes all of modules code, stuffs it in individual functions and stuffs those functions into an array and then calls different functions in that array.

```js
// simplify of what is going on inside of bundle.js file

var myModules = [
  function() {
    const sum = (a, b) => a + b;
    return sum;
  },
  function() {
    const sum = myModules[0]();
    const total = sum(10, 10);
    console.log(total);
  }
];

var entryPointIndex = 1;
myModules[entryPointIndex](); // it calls index.js function
```

9.  Introduction to Module Loaders

- Module Loaders
  - It does some pre-processing on files before they are added to bundle.js file
  - It is commonly used to implement transpiling for ES2015 code. (such as babel)
  - Also it can be used to handle css, images, all different types of files can be enabled for usage of webpack.
- Babel Modules
  - babel-loader
    - Teaches babel how to work with webpack.
  - babel-core
    - Knows how to take in code, parse it and generate some output files.
  - babel-reset-env
    - Ruleset for telling babel exactly what pieces of ES2015/6/7 syntax to look for and how to turn it into ES5 code.

10. Babel Configuration

- In webpack.config.js file, by defining loaders or rules in module, we can tell webpack to take a pre-processing step on every file that includes into bundle.js file.
- Test get assigned a regular expression. Any regular expression we passed into test property will be taken by webpack and applied to a file name of every file that we import to our project. (/\.js\$/ : all file ends with .js, babel will be applied)
- Create .babelrc file in order to execute babel-preset-env.

11. Handling CSS with Webpack

- The benefit of using webpack to handle our css is that we can make use of a bunch of different CSS files and import those files into each of the files that we actually care about to make use of them inside of our project. _It gives very clear relationship between JS file and CSS file. It is really a tool that we can use to make developement or styling of our applications a lot more staraightforward_.
- You do not need to export 'images' because it just runs not executing something.
- If we want to include a file in bundle.js, make sure that it has to get exported at least one file.

12. The Syle and CSS Loaders

- any files that not ending '.js', we do have to specify file extention at the end.
- We are going to install two loaders. (css-loader, style-loader)
  - css-loader
    - Know how to deal with CSS imports
  - style-loader
    - Takes CSS imports and adds them to the HTML document
- How to apply css, style loaders in webpack.config?
  ```js
   {
     // in package.json file
     // loader is applied from right to left
      use: ["style-loader", "css-loader"],
      test: /\.css$/
   }
  ```
- CSS loader and style loader have taken the css and inject it into a <head> tag.
- But we have not yet instructed webpack about HTML document. So how could webpack modifies the content of <head> tag?
- Because css and style loaders take bundle.js and add some code inside of it to tell bundle.js how to update the HTML document after the script actually loaded up.
- In order words, in image_viewer.js file imports css file -> the css loader notices that we have imported css file -> css loader takes contents of file and sticks it into a long string inside of bundle.js document -> the style loader looks at the contents that css loader takes in and add some code to bundle.js file to take the string(updated by css loader) and append to the <head> tag in it's own individual style tag.
- But loading up css and JavaScript in single file is slower because browser handle those files in parellel download request.

13. The Extract Text Plugin

- In order to overcome the weakness of css and style loader, we are going to use another library.
- Install extract text webpack plugin (npm install --save-dev extract-text-webpack-plugin@2.0.0-beta.4)
- It takes reference to loader and it will run webpack with it and it will take any text that generated by the loader and save it into a seperate file in our output directory.
- plugin
  - It keeps files from ending up inside of bundle.js output

```js
module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/
      },
      {
        // use and loader are same
        loader: ExtractTextPlugin.extract({
          loader: "css-loader"
        }),
        test: /\.css$/
      }
    ]
  },
  plugins: [
    // this line tells extract text library define any files that were transformed by it's loader earlier up inside of css-loader
    // in order words, anything that caught by css-loader will be saved in file 'style.css'
    new ExtractTextPlugin('style.css')
  ]
```

14. Handling Images with Webpack

- Images from outside source are pretty slow. It takes a lot longer to load up the image.
- It would be much faster if we hosted images locally ourselves.
- Whenever we attempt to import an image into a file, we are going to send it down to seperate loaders
  - image-webpack-loader
    - It will compress the image for us automatically
  - url-loader
    - It behaves differently depending a size of an image.
    - If the image is small than it includes the image in bundle.js as raw data.
    - If the image is big than it includes the raw image in the output directory.
- How to set image-webpack-loader and url-loader

```js
 {
    test: /\.(jpe?g|png|gif|svg)$/,
    use: [
      {
        loader: "url-loader",
        options: { limit: 40000 } // look for any images that are 40000 bytes large
      },
      "image-webpack-loader"
    ] // 순서는 오른쪽에서 왼쪽으로 읽는다.
  }
```

- If we import images from assets folder, it will go through url and image-webpack loaders and if there is an image that bigger than 40000 bytes, it is going to be saved as seperated file into build directory.
- The image smaller than 40000 byets, coded base64 and saved as string in bundle.js which means only this size of image appears on screen.
- In console, there is an error about big image and the url is set to wrong direction. If we want to set this right, we have to use 'publicPath' property in webpack.config file.
- URL loader emits the URL of the file with 'output.publicPath' prepended to the URL.
- publicPath propery is not only used by URL loader. It will also be used by any other loader that produces direct file reference to a file in our output directory.

15. Code Splitting

- With code splitting, webpack allows us to split up bundle.js output into seperate individual files and programmecally decide when to load up different pieces of bundle inside of our code base.
- In other words, we can control exactly when we load up different modules to show different code inside of our project.
- Suppose in login screen, only minimum amount of JS is shown but after logged in, load the rest of JS.
- System variable
  - System is a global variable inside of JS.
  - when we call System.import, we pass name of the module that we want to import browser than reach out to a server and try to find the module.
  - It works only for one module.
  - However if the module we want to call has other modules inside then we can take with it.
  - System.import also takes sometimes to reach out server. (it works asynchronously) it returns promise as well.
  - When we add in any System.import call into our code and webpack processes it, webpack is going to automatically search through our codebase for any calls to System.import.
- When you enable code splitting inside of JS application, which is done by just adding system.import call, webpack is going to automatically changed the code about figuring out how to go and fetch modules off the server exported from the application.

16. Mininum Webpack Config

```js
rules: [
  {
    use: "babel-loader",
    test: /\.js$/,
    exclude: /node_modules/
  }
];
```

- exclude indicates that do not apply babel to any files inside of node_modules directory.
- .babelrc file instructs babel which pieces of syntax you should try to transform inside of our code base. and since this is made of react, add "react" in the presets array.

17. Vendor Asset Caching (Downloaded project file from Stephen's github)

- asset caching : In first visit of application a browser will download js files. However in next visit, if a browser has downloaded js files and saved local copy of that file, it is not going to download files.
- Webpack is all about helping us with the amount of time that it takes to load up our JavaScript dependencies of our application.
- The first techinque to adjust the size of the application is splitting up our codebase into two big seperate chunks of files usiing code splitting.
- Using code splitting, we are going to look at taking all of the code that we are writing for our project(index.js, searchList.js) and separating it out from all of the vendor-related code(third-party module code).

18. Refactoring for Vendor Splitting

- With code splitting and vendor asset, we can decrease the time that loads up an application on subsequent visits.
- When we do code splitting in vendor dependencies. Rather than single bundle.js in filename in webpack.config, we are going to specifically tell webpack before it starts to parse any of our code that we want it to split up our codebase into two separate secions.
- Vendor Splitting
  - Code will change quite frequently. However libraries and modules we use are not going to change frequently. Therefore we make a file called 'vendor.js' by seperated from bundle.js which is the file that contains bunch of codes and decrease load up time.

```js
const VENDOR_LIBS = [
  // each string in the array are the name of the library(npm modules) that we want to include in seperate vendor file.
  // the modules are here going to change infrequently
  "faker",
  "lodash",
  "redux",
  "react-redux",
  "react-dom",
  "react-input-range",
  "redux-form",
  "redux-thunk"
];
// two entry points are created
entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  },
```

19. Effect of Code Splitting

- After 'run npm build' we have new file called vendor.js However the size of bundle.js is unchanged.
- Because we thought we have seperated our vendor files from bundle.js but that does not mean that webpack is going to automatically find common modules between bundle.js and vendor.js and make sure they have those libraries only one time.
- Therefore, we are going to use plugin called "the common's chunk plugins".

```js
var webpack = require("webpack");

plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor" // it tells webpack look at the total sum of total project files between entry points(bundle input and vendor input), if any modules duplicates between those points, pull it out and only add it to vendor entry point
  })
];
```

- Using this plugin acutally decrease the size of bundle.js from 3.8MB to 468KB.
- But size of total file (bundle.js and vendor.js) is still big and applicaion does not work with an error saying 'webpackJsonp is not defined'

20. Troubleshooting Vendor Bundles

- 'webpackJsonp is not defined' error occurs because we have not added new vendor.js file into html file.
- But installing plugin called 'html webpack', you don't need to do it.
- After setting is done, delete <script> tag that connects bundle.js file and index.html file. This plugin will generate automatically for us.

```js
var HtmlWebpackPlugin = require("html-webpack-plugin");

plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor"
  }),
  new HtmlWebpackPlugin({
    // using existing html document as a source for template
    template: "src/index.html"
  })
];
```

- After 'npm run build' command, you can find new html file that created in dist file. Therefore, application file in dist directory must be run

21. Chunk Hashing for Cashe Busting

- How browser decides whether or note it has downloaded a file?

  - It will look at the exact filename of the file and also specifically like bundle.js. If the filename has not changed, the browser will use the cached version.

- Cach Busting

  - We need to somehow figure out a way to rename our output bundle.js file and vendor.js file to make sure the browser is really clear on when the file's contents have actually changed.
    Therefore by renaming it we will give the browser the ability to really answer the question whether or not it has downloaded that file before.
  - In order to do this, we are going to use chunkhash property in filename.

- chunkhash
  - Every singl time that our bundle or vendor file is updated or changed in some fashion, Webpack will automatically hash the contents of that file and then spit it out as the chunkhash.
  - If we modify even one character inside of any of files in vendor of bundle, the entire chunkhash is going to change.
  - chunckhash makes sure that as long as the file got updated in any way shape or form, the browser will attempt to redownload it.
  ```js
  output: {
    path: path.join(__dirname, "dist"),
    // chunkhash is unique string of characters
    filename: "[name].[chunkhash].js"
  },
  ```
  - But if we change bundle.js file, webpack will mistakenly think that our vendor file is updated as well. To fix that, we have to change the name of the property in plugins name.
  ```js
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ["vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      // using existing html document as a source for template
      template: "src/index.html"
    })
  ];
  ```
  - manifest creates a third JS file in our dist directory called manifest.js.
  - The purpose of the file is to better tell the browser or kind of better give everything involved a little bit more understanding on whether or not the vendor file actually got changed.

22. Cleaning Project Files

- Every single time that I make a change to my project and then rebuild it, additional JS build files are put inside of dist folder.
- If we start to rebuild the project many times, we are going to end up with a ton of duplicate files inside of dist directory.
- So we are going to clear out the contents in dist directory using module called 'rimraf'.
- After installation is done, set rimraf module inside of package.json file.

```js
"scripts": {
    "clean": "rimraf dist",
    // this command deletes all files in dies directory and then running webpack to build our project
    "build": "npm run clean && webpack"
  },
```

23. Webpack Dev Server

- It is an intermediary between our browser and our Webpack output. With webpack-dev-server we only have to start our server up one time. It is responsible for watching all of our project code and automatically rebuilding our project whenever one of our files changes.
- The real key aspect of webpack-dev-server is that it only updates the individual JS modules that are changed when we save our projects(individual files).
- The next key difference about webpack-dev-server is that when we open up our web browser, we will no longer be manually loading up our index HTML document. Instead, we are going to make connection or get access to this webpack-dev-server which will automatically feed us the index HTML and otherwise all the other deveoploment assets.
- Webpack-dev-server is really developing a client-side application. (SPA with zero connection to server side logic)
- So how we are going to integrate webpack-dev-server and traditional server side logic?

24. Gotchas with Webpack Dev Server

- After webpack-dev-server installation on terminal, modifies script in package.json

```js
"scripts": {
    "clean": "rimraf dist",
    "build": "npm run clean && webpack",
    "serve": "webpack-dev-server"
  },
```

- When I make that change, webpack-dev-server will automatically rebuild our project, but it decides to only rebuild one individual file. Therefore webpack-dev-server does not rebuild our entire project, it just takes care of that very small change.
  The result of which, the rebuild time is dramatically shortened.
- But when we give a change to webpack.config file, we have to restart webpack-dev-server.
- Unlike 'npm run build', webpack-dev-server does not create files in dist folder. Those files are saved in only in memory and we navigate 'localhose:8080' then the project files are served directly out of memory, not directly from our hard drive.
  _dev-server is only for development not for production use._
- Because when we run webpack-dev-server, it will internally execute webpack. But it stops webpack from actually saving any files in our project file directory.
- In order words, if you want to get raw development assets, you have to run 'webpack' not 'webpack-dev-server'.

25. React Router with Codesplitting

- Using code splitting with React-router is a fantastic way to break up an application into smaller parts and this is something that gets really useful when you are working on really large React projects.
- In router.js file, when a user first lands at our website, they can grab the big bundle.js file and that will have all the code they neede for show the very root base routes of the application which are Home and ArtistMain components.
- Then as the user starts to navigate around the app, we will add in some code splitting to dynamically load up the ArtistCreate, ArtistDetail and ArtistEdit components.
- What we are going to do is transforming general jsx structure into a plain JS object. (this is actually what react-router does behind the scenes all the jsx you write.)

```js
const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={ArtistMain} />
        <Route path="artists/new" component={ArtistCreate} />
        <Route path="artists/:id" component={ArtistDetail} />
        <Route path="artists/:id/edit" component={ArtistEdit} />
      </Route>
    </Router>
  );
};

// we can change react-router as form of objective using code-splitting
const componentRoutes = {
  component: Home,
  path: "/",
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: "artists/new",
      // getComponent works as asynchronously
      getComponent(location, cb) {
        // React-router expects us to call cb which is a function with our module or with our component after we have loaded it up
        // first argument of cb is an error object. In our case, error is not expected.
        System.import("./components/artists/ArtistCreate").then(module =>
          cb(null, module.default)
        );
      }
    },
    {
      path: "artists/:id",
      getComponent(location, cb) {
        System.import("./components/artists/ArtistDetail").then(module =>
          cb(null, module.default)
        );
      }
    },
    {
      path: "artists/:id/edit",
      getComponent(location, cb) {
        System.import("./components/artists/ArtistEdit").then(module =>
          cb(null, module.default)
        );
      }
    }
  ]
};

const Routes = () => {
  return <Router history={hashHistory} routes={componentRoutes} />;
};
```

- the code above seems bit repetitive but System.import is very static analysis, literally just reading over your code. Therfore we are not able to dynamically generate it based on the location that the user is navigating to.

26. Deployment Options

- When we think about webpack deployment, we think about whether or not we are serving up a static application and the words 'front-end assets only', or if we have both a front-end application and a back-end as well.
- Static Asset Providers
  - Github Pages, Amazon S3, Digital Ocean, MS Azure, surge
- Server-based Providers
  - Amazon EC2, Amazon ELB, Digital Ocean, Heroku, MS Azure

27. Getting Production Ready

- Among all libraries we have installed, Reactjs makes use of this NODE_ENV flag. Whenever React runs, it looks for a window scoped variable of 'process.env.NODE_ENV'.
- If it finds the variable and it is equal to the string production, react is not going to do quite so many error checking procedures while it runs and renders an application.
- This is beneficial because it assumes that maybe you don't want so much error checking and the thought there is that in your development environment, you want a lot more error checking so you can catch a lot of different errors before they get pushed to production.
- Adding 'process.env.NODE_ENV' in the global variable in webpack.config, it makes sure that React does not take all that error checking into consideration.
- In order to 'process.env.NODE_ENV' available in window, DefinePlugin is used.

```js
new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
});
```

- 'process.env.NODE_ENV' is talking about the NODE_ENV environment variable running on our machine.
- Also setting NODE_ENV=production in package.json file

```js
"scripts": {
    "clean": "rimraf dist",
    "build": "NODE_ENV=production npm run clean && webpack",
    "serve": "webpack-dev-server"
  },
```

- NODE_ENV=production makes sure that when node runs are clean and webpack scripts, webpack will be ran in the node environment of production.
- If we build our project without defining 'production' environment variable then webpack will assume that we are not running in production and we don't have to worry about all these additional checks.
- Adding '-p' right after 'webpack' tells webpack that we want a production version of our output. When webpack runs in production mode, it will automatically minify all of our JS code.

```js
"build": "set NODE_ENV=production&&npm run clean&&webpack -p",
```

- When minifies JS code, webpack will automatically rename some of our variables and it will automatically compact down all of our code into the minimum amount of code possible. (size decreases 20% to 30% than in development mode.)

28. Deployment of Servers (Assets + Custom Server)

- There are two general types that we can structure our deployment.
  - The first type (putting together in two seperate addresses)
    - Suppose user visits www.app.com, it will get back the build application. In other words, our index html file and any supporting JS documents. That application will be sent back to the user's browser, it will be loaded up inside of browser, JS application we made can make API requests to this outside server that we are maintaining.
    - It is somewhat being similar to having a static application but it is also got the ability to make requests to this outside API.
    - This is how many large applications work.
    - It has possibilities of performance gains out of separation of our static assets and our more dynamic assets.
  - The second type (putting together in a single server address)
    - It is the single monolithic server that will both serve up our app and then also have the ability to have some specialized API or server based logic as well.
    - In other words, a node server is responsible for serving up the application and also some business logic as well.
    - This approach is more common for smaller applications because deployment is easier as well because there is only one server that we have worry about.
    - From now, when we visit our node server, we expect the node server to somehow reach over to webpack and serve up our application bundle both in a development environment and production environment.

29. Node and Webpack Integration (by using ExpressJS)

- Integrating webpack with node is going to be a little bit different depending on whether or not we are on our local development machine or our application has been deployed to some outside service provider. In other words, a node server will be behaving differently depending on its environment.
  - How node is going to behave when we are running on our local machine?
    - Development Environment
      - we are going to set up node so that it automatically passes request through to our webpack build process.
      - This will allow us to take advantage of webpack without having status starts up a separate webpack server. So it is going to be running internally toward NodeJS server.
    - Production Environment
      - In production world, we do not want to run webpack at all because it is a huge resource hog
      - Instead, we want to save the generated assets inside of dist directory and whenever a user navigates to our server in a browser, we are going to tell the node server to just go ahead and serve out these statically built assets from particular directory.
- Setting up the environment in server.js by installing express

```js
const express = require("express");

const app = express();

app.listen(3050, () => console.log("Listening"));
```

30. Webpack Middleware in Development

- We are going to inside of our server.js file by wiring up webpack to make sure that it works correctly in development.
- Webpack middleware to help us serve up our application.
- Middlewares are used to intercept and modify incoming request to our server and they are a part of ExpressJS
- The middleware works by intercepting incoming request for an application(index HTML file) and respond with the compiled JS application.
- Easy to say, the middleware is watching for incoming requests, if it sees one, it is going to snatch it and respond with the application assets.

```js
// we need all three for the middleware
const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));
```

- For a note, middleware@1.9.0 version is being used. (I have tried out other version but it keeps throwing 'invalid' error.)
- Using this way, it allows us to make changes to our individual project files, webpack will automatically rerun over our project and we can refresh the page and see our changes appear live on the screen. Which means we do not need to manually run webpack command all the time like 'npm run build'.

31. Webpack Middleware in Production

- The idea is we want to build production assets exactly one time and stick them into dist directory. Then anytime that an user comes to the server for index.html file or JS files, we will send them back the resources that are contained inside dist directory. So having nothing to do with webpack whatsoever.
- webpackMiddleware is only executed in development environment.
  we can use process.env.NODE_ENV with 'if' statment to make it.
- But whenever we are deploying to remote servers like AWS or Heroku, the value of NODE_ENV is not necessarily set for us. which means the way we set the variable right above is going to differ based on the deployment target or where an application is being deployed.
- And we are going to add a little bit of code in else statment to make all of the resources inside of dist directory are freely avaialble to users.

```js
if (process.env.NODE_ENV !== "production") {
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config.js");
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  // this line of code tells Express that it should make everything inside of the dist directory freely available for use.
  app.unsubscribe(express.static("dist"));
  // this line of code says that if anyone makes a get request to any route on our server, go ahead and send them back index.html file.
  // this code is used specifically for compatibility with React-Router and browser history module.
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
  });
}
```

- type 'set NODE_ENV=production&& node server.js' in command line to execute the server.
- How to acutally add in some logic for handling authentication or working with the database or anything like that?

  - To do that you would additional routes _above_ all existing webpack information or configuration. Espeacially

  ```js
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
  });
  ```

  this above.

  ```js
  app.get("/hello", (req, res) => res.send({ hi: "there" }));
  if (process.env.NODE_ENV !== "production") {...}
  ```

- Many different service providers like AWS and especially Heroku, will not allow you to define your own port.

```js
// 3050 is not allowed
app.listen(3050, () => console.log("Listening"));
```

- Instead, they will want you to bind to a port specified by the server.

```js
app.listen(process.env.PORT || 3050, () => console.log("Listening"));
```
