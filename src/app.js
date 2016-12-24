import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

// Routing
import routing from './routing';

// Containers
import Home from './Containers/Home/index';

// Components
import {Test} from './Components/Todo/index';

angular.module('app', [uiRouter, Home, Test])
  .config(routing);