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
 - [ ] PostCSS to follow the real CSS spec, with super power features
 - [ ] CSS Modules for Modular Component CSS, scoped variables.
 - [ ] Make Angular base setup

## Webpack for Production

## Preferred testing suite
 - Protractor (End to end)
 - Jasmine (Unit test)
 - Karma (Makes unit tests in Jasmine dead easy)