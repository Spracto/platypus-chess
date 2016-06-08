var chessApp = angular.module("chessApp", ["ngRoute"]);


chessApp.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "chessboardjs-0.3.0/partials/new.html"
  })
  .when("/forks", {
    templateUrl: "chessboardjs-0.3.0/partials/forks.html"
  })
  .when("/skewers", {
    templateUrl: "chessboardjs-0.3.0/partials/skewers.html"
  })
  .when("/discovered", {
    templateUrl: "chessboardjs-0.3.0/partials/discovered.html"
  })
  .when("/pins", {
    templateUrl: "chessboardjs-0.3.0/partials/pins.html"
  })
  .when("/endgames", {
    templateUrl: "chessboardjs-0.3.0/partials/endgames.html"
  })
  .otherwise({
    redirectTo: "/"
  })
})
