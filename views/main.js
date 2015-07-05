var app = angular.module('Crullian', ['ui.router']);

app.controller('MainCtrl', function($scope) {
  $scope.message = "chris gullian.";
});

// app.controller('SignupCtrl', ['$scope', '$http', '$state', '$rootScope', function($scope, $http, $state, $rootScope) {
//   $scope.signUp = function(user) {
//     console.log('hitting angular signup');
//     // console.log($http);
//     var user = {
//       username: $scope.username,
//       password: $scope.password
//     };
//     $http.post('/signup', user)
//       .then(function(data) {
//         $state.go('success');
//         $rootScope.greeting = "Greetings, User!";
//       })
//       .catch(function(error) {
//         $state.go('error');
//         $rootScope.greeting = "Try Again, Fool!";
//         $rootScope.error = error;
//         console.log($scope.error);
//       });
//   };
// }]);

// app.controller('LoginCtrl', ['$scope', '$http', '$state', '$rootScope', function($scope, $http, $state, $rootScope) {
//   $scope.logIn = function(user) {
//     console.log('hitting angular login');
//     var user = {
//       username: $scope.username,
//       password: $scope.password
//     };
//     $http.post('/login', user)
//       .then(function(data) {
//         $state.go('success');
//         $rootScope.greeting = "For the Win";
//       })
//       .catch(function(error) {
//         $state.go('error');
//         $rootScope.greeting = "Forgot your name? Password?";
//         $rootScope.error = error;
//       });
//   };
// }]);

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