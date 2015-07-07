var app = angular.module('Crullian', ['ui.router']);

app.controller('MainCtrl', function($scope) {
  $scope.message = "chris gullian.";

  ["               _____           _____                  _ __              ",
    " __________ __/ / (_)__ ____  / ___ \\___ ___ _  ___ _(_) /_______  __ _ ",
    "/ __/ __/ // / / / / _ `/ _ \\/ / _ `/ _ `/  ' \\/ _ `/ / // __/ _ \\/  ' \\",
    "\\__/_/  \\_,_/_/_/_/\\_,_/_//_/\\ \\_,_/\\_, /_/_/_/\\_,_/_/_(_)__/\\___/_/_/_/",
    "                              \\___//___/                                "
  ].forEach(function(ln) {
    console.log(ln)
  });

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