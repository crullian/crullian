var app = angular.module('Crullian', ['ui.router']);

app.controller('MainCtrl', function($scope) {
  $scope.message = "chris gullian.";
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('music', {
      url: '/music',
      templateUrl: 'views/music.html'
    })
    .state('art', {
      url: '/art',
      templateUrl: 'views/art.html'
    })
    .state('web', {
      url: '/web',
      templateUrl: 'views/web.html'
    })
    .state('error', {
      url: '/error',
      templateUrl: 'views/error.html'
    });
});