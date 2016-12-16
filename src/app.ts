import * as angular from 'angular';
import 'angular-ui-router';

export let app = angular.module('app', ['ui.router']);

app.config([
    function ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
        let pageNotFoundState = {
            name: 'pagenotfound',
            url: '/pagenotfound',
            template: '<h1>404</h1>'
            // templateUrl: 'src/views/pageNotFound/PageNotFound.html',
            // controller: 'pageNotFoundController',
            // controllerAs: 'vm',
            // bindToController: true,
        };

        let homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'src/containers/Home/Home.html',
            controller: 'homeController',
            controllerAs: 'vm'
        };

        $stateProvider.state(homeState);
        $stateProvider.state(pageNotFoundState);

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/pagenotfound');
    }
]);