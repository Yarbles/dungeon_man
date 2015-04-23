dungeonMan.factory('CharacterFactory', function CharacterFactory() {
    var factory = {};
    factory.name_of_character = null;
    factory.addCharacter = function(name) {
        this.name_of_character = name;
    }
    return factory;
});
