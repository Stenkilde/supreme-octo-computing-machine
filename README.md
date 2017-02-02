#Angular 1.x Typescript Webpack setup

## If you want to try it out

Do the following

Make sure you have yarn installed `npm install -g yarn`
```
    $ yarn install
    $ typings install
    $ yarn start
```

After this open your browser on path localhost:8080 and test ahead!

## Contributing
Please use pull requests from a branch with a name that makes sense to what you are working on

##Folder structure will be as following

 - build
 - config
 - css
 - libs
 - src
 	- components
 		- ComponentName
 			- componentname.css
 			- componentname.js
 			- componentname.html
 	- containers
 		- Home
 			- home.css
 			- home.js
 			- home.html
 	- models
 		- Factories
 		- Services
 	+ App.ts
 	+ routing.ts
 - typings

## Webpack for dev
 - [x] Compile the TypeScript to useable Javascript for browsers
 - [x] Hotreload (Monkey patching) edits on the fly
 - [x] Lint code with tslint
 - [x] Make Angular base setup
 - [x] Ui Router
 - [x] PostCSS to follow the real CSS spec, with super power features
 - [x] CSS Modules for Modular Component CSS, scoped variables.
 - [x] Add Example Component
 - [ ] Add Example Service
 - [ ] Implement Material
 - [ ] Cache Busting
 - [ ] Testing Suite

## Webpack for Production
- [ ] Minify all the code
- [ ] Uglify code

## Preferred testing suite
 - Jasmine (Unit test)
 - Karma (Makes unit tests in Jasmine dead easy)