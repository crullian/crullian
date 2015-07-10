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

app.controller('MusicCtrl', function($scope) {
  $scope.songs = [{
    title: "flaunting the sorcery (q.r.)",
    img: "views/assets/QR blocks.jpg",
    src: "views/assets/Flaunting The Sorcery (Q.R).mp3"
  }, {
    title: "welcome to the night",
    img: "views/assets/WTTN cover final mg.jpg",
    src: "views/assets/Welcome To The Night 23.mp3"
  }, {
    title: "temporary love",
    img: "views/assets/getting_away.jpg",
    src: "views/assets/Temporary Love34MP3.mp3"
  }];
});

app.controller('ArtCtrl', function($scope) {
  $scope.collection = [{
    title: "sheepgirl",
    img: "views/assets/Sheepgirllg.jpg"
  }, {
    title: "bullwoman",
    img: "views/assets/Bull Woman.jpg"
  }];
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
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    })
    .state('error', {
      url: '/error',
      templateUrl: 'views/error.html'
    });
});

app.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);