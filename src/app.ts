import * as angular from 'angular';
import 'angular-ui-router';

import './components/test/index';

export let app = angular.module('app', ['ui.router'])
    .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
        // ************************************************************************************************* //
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
            //templateUrl: './containers/Home/Home.html'
            template: '<test></test>'
        };

        // ************************************************************************************************* //
        $stateProvider.state(homeState);
        $stateProvider.state(pageNotFoundState);

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/pagenotfound');
    }
]);

angular.bootstrap(document, ['app'], {
    strictDi: true
});