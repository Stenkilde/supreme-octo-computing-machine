import * as angular from 'angular';
import 'angular-ui-router';
import {Test} from './test';

angular.module('app.test', ['ui.router'])
    .component('Test', new Test());