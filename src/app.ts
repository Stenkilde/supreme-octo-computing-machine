import * as angular from 'angular';
import './Components/Counter/index';

export let App = angular.module('app', ['app.counter']);

angular.element(document).ready( () => {
    angular.bootstrap(document, [], {
        strictDi: true
    });
});