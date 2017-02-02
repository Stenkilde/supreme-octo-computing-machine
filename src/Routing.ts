export default [
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
        const pageNotFoundState = {
            name: 'pagenotfound',
            url: '/pagenotfound',
            template: '<page-not-found></page-not-found>',
        };
        $stateProvider.state(pageNotFoundState);

        const homeState = {
            name: 'home',
            url: '/',
            template: '<home></home>'
        };
        $stateProvider.state(homeState);


        $urlRouterProvider.otherwise('/pagenotfound');
    }
];