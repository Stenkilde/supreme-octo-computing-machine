import * as angular from 'angular';
import Counter from './Counter';

export default angular.module('app.counter', [])
    .component('counter', Counter);