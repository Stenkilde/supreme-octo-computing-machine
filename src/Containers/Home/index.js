import angular from 'angular';
import uirouter from 'angular-ui-router';

// css
import '../../../css/main.css';

// Routing
import routing from './Home.route';
import HomeController from './Home';

// Services
import randomNames from '../../Services/RandomNameService';

export default angular.module('app.home', [uirouter, randomNames])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;