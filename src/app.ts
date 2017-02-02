import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';

import 'angular-ui-router';
import 'angular-material';

import Router from './Routing';
import './Containers/Home/';
import './Containers/PageNotFound/';
import './Components/Counter/';

angular.module('app', ['ngAnimate', 'ngAria', 'ui.router', 'ngMaterial', 'app.home', 'app.pagenotfound', 'app.counter'])
    .config(Router);
angular.bootstrap(document, ['app'], {
    strictDi: true
});