routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./Home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}