dungeonMan.controller('CharactersCtrl', function CharactersCtrl($scope, CharacterFactory) {
    $scope.CharacterFactory = CharacterFactory;
    $scope.name_of_character = CharacterFactory.name_of_character;

    $scope.addCharacter = function() {
        CharacterFactory.addCharacter($scope.nameOfCharacter, $scope.healthPoints);

    }
});
