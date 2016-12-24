import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './Home.route';
import HomeController from './Home';

import randomNames from '../../Services/RandomNameService';

export default angular.module('app.home', [uirouter, randomNames])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;