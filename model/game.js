let Game = (function () {
    let name;
    let players = [];
    let rounds = [];
    let rule;

    var self = {};
    
    self.setRule = function(newRule) {
        rule = newRule;
    };

    self.setName = function(newName) {
        name = newName;
    };

    self.setPlayers = function(newPlayers) {
        players = newPlayers;
    };

    self.newRound = function(newRound) {
        rounds.push(newRound);
    };

    self.readName = () => {
        return name;
    }

    self.readPlayers = () => {
        return players;
    }

    self.readRule = () => {
        return rule;
    }

    return self;
})();

module.exports = Game;