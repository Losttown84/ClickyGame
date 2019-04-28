import React, { Component } from "react";
import Nav from ".components/nav";
import Jumbotron from ".components/Jumbotron";
import Playercard from ".components/Playercard";
import footer from ".components/footer";
import "./App.css";

class App extends Component {
  state = {
    player,
    playerClicked: [],
    score: 0
  };

  imageClick = event => {
    const currentPlayer = event.target.alt;
    const clickedPlayer = this.state.playerClicked.indexOf(currentPlayer) > -1;

    if(clickedPlayer) {
      this.setState({
        player: this.state.player.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        playerClicked: [],
        score: 0
      });
      alert("You chose that picture already, so you've lost. Try again?");
    } else {
      this.setState(
        {
          player: this.state.player.sort(function(a, b) {
            return 0.5 - Math.random();
          })
        }
      )
    }
  }
}

render() {
  return (
    <div>
      <Nav 
        score={this.state.score}
      />
      <jumbotron />
      <div className="wrapper">
        {this.state.player.map(player => (
          <PlayerCard
            imageClick={this.imageClick}
            id={player.id}
            key={player.id}
            image={player.image}
          />
        ))}
      </div>
      <footer />
    </div>
  );
}
}
export default App;