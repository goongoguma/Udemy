* How to set up babel with react preset and env preset(Before setting up, yarn must be set up first)

1. Create a file (ex.babel-folder)

2. cd babel-folder

3. type yarn global add babel -cli@6.24.1
-> This gives us access to a command line interface to use the babel compiler </br>
-> If the global installation command failed when using yarn, use npm install command (npm install -g babel-cli@6.24.1)</br>

4. When installation is finished, type bable --help to check babel is installed

5. It is time to install react and env presets and these are going to be installed locally 

6. type yarn init
-> It sets up a project to use yarn. It is going to allow us to specify those local dependencies </br>

7. type or leave questions empty and it is going to generate new file in the project file(package.json)
-> The purpose is to outline all of the dependencies that a project needs in order to run.</br>

8. type yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

9. "babel-preset-env": "1.5.2" , "babel-preset-react": "6.24.1"  have been added in package.json file and node_modules and yarn.lock files are created in the folder

10. create new folder in the project folder and create new .js file which has same name as another .js file in another folder 
-> .js file in new folder is going to get compiled saved another .js file and that is what our .html file is actually going to use </br>
-> We do not need to manually change .js file in the older folder, that is going to change for use when we run the command </br>

11. babel src/app.js --out-file=public/scripts/app.js --presets=env,react (overrides one .js file to another )
-> when we run this, src/app.js --out-file overrides public/scripts/app.js </br>

12. babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 
-> this is going to watch src/app.js changes and automatically create a new public script.js file every time a change is detected</br>

13. start another cmd and type live-server public 
-> this is automatically going to open up our web app in the browser and a text is showed up</br>

14. DONE 


