dungeonMan.controller('CharacterCtrl', function CharacterCtrl($scope, CharacterFactory) {
    $scope.characters = CharacterFactory.characters;
    $scope.CharacterFactory = CharacterFactory;
});
