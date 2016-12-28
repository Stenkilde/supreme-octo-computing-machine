#Angular 1.x Typescript Webpack setup

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
 	+ app.ts
 	+ routing.ts
 	+ styles.ts
 	+ views.ts
 - typings

## Webpack for dev
 - [x] Compile the TypeScript to useable Javascript for browsers
 - [x] Hotreload (Monkey patching) edits on the fly
 - [x] Lint code with tslint
 - [x] PostCSS to follow the real CSS spec, with super power features
 - [x] Make Angular base setup
 - [ ] CSS Modules for Modular Component CSS, scoped variables.

## Webpack for Production

## Preferred testing suite
 - Protractor (End to end)
 - Mocha (Unit test)
 - Chai
 - Sinon