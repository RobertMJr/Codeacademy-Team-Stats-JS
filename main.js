
// create a team object to store information about our team
const team = {
    // teams have players, hence creating the _players property to store them
    _players: [
      {
      firstName: 'John',
      lastName: 'Hopkins',
      age: 20
    },
      {
        firstName: 'Kyle',
        lastName: 'Doe',
        age: 27
      },
      {
        firstName: 'Eduard',
        lastName: 'Korn',
        age: 31
      }
    ],
    // teams play games, hence creating the property for storing them
    _games: [
      {
        opponent: 'Rapid',
        teamPoints: 3,
        opponentPoints: 0
      },
      {
        opponent: 'Steaua',
        teamPoints: 1,
        opponentPoints: 1
      },
      {
        opponent: 'Dinamo',
        teamPoints: 3,
        opponentPoints: 0
      }
    ],
    // getter method for retrieving the players
    get players () {
      return this._players;
    },
    // getter method for retrievening the games
    get games () {
      return this._games;
    },
    // method for adding a player to the team object
    addPlayer (firstName, lastName, age) {
      let player = {
        firstName,
        lastName,
        age
      };
      this._players.push(player);
    },
    // method for adding a game to the team object
    addGame (opponentName, teamPts, opponentPts){
      let game = {
        opponent: opponentName,
        teamPoints: teamPts,
        opponentPoints: opponentPts
      };
      this._games.push(game);
    },
    // method for calculating the average score of all the team's games
    averageScore () {
        let totalPoints = 0;
        this._games.forEach((element) =>{
            totalPoints += element.teamPoints; 
        });
        const result = (totalPoints / this._games.length).toFixed(2);
        return `The average score of the team's games is ${result} points per game.`
    }

  };
  
  // testing that everything works as expected
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Craiova', 3, 0);
  team.addGame('Arges', 1, 1);
  team.addGame('Sportul', 0, 3);
  console.log(team.players);
  console.log(team.games);
  console.log(team.averageScore());
  team.addGame('Voluntari', 3, 0);
  console.log(team.games);
  console.log(team.averageScore());
