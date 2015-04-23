dungeonMan.factory('CharacterFactory', function CharacterFactory() {
    var factory = {};
    factory.name_of_character = null;
    factory.healthPoints = null;
    factory.addCharacter = function(name, hp) {
        this.name_of_character = name;
        this.healthPoints = hp;
    }
    return factory;
});
