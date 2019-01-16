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

- In webpack.config.js file, by defining loaders or rules in module, we can tell webpack to take a pre-processing step on every file that includes into budle.js file.
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
- Because css and style loaders take bundle.js and add some code inside of that to tell bundle.js how to update the HTML document after the script actually loaded up.
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
