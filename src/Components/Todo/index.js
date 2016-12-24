import angular from 'angular';
import { Counter } from './Counter';

export const Test = angular
  .module('app.todo', [])
  .component('todo', Counter)
  .name;