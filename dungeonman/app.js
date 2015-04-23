var dungeonMan = angular.module('dungeonMan', ['ui.router']);

dungeonMan.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/splash.html"
    });

    $stateProvider.state('character_create', {
        url: "/character_create",
        templateUrl: "partials/character_create.html",
        controller: 'CharactersCtrl'
    });
    $stateProvider.state('cell', {
        url: "/cell",
        templateUrl: "partials/cell.html"
    });
});
