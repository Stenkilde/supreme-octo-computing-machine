# Tricom Angular 1.5.x Typescript Webpack setup

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

## Webpack for bundling
 - Compile the TypeScript to useable Javascript for browsers
 - PostCSS to follow the real CSS spec, with super power features
 - CSS Modules for Modular Component CSS, scoped variables.
 - Hotreload (Monkey patching) edits on the fly
 - Lint code with tslint

## Preferred testing suite
 - Protractor (End to end)
 - Jasmine (Unit test)
 - Karma (Makes unit tests in Jasmine dead easy)