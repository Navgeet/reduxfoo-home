angular.module('home', [ 'ui.router' ]);

angular.module('home').config(function($urlRouterProvider, $stateProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/reduxfoo-home/src/partials/home/home.html'
  });

  $urlRouterProvider.otherwise('/');
  
});
