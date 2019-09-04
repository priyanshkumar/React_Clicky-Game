import React, { Component } from "react";
import Nav from "./Navigation/Nav";
import Header from "./Header/header";
import Area from "./GameArea/area";
import Footer from "./Footer/footer";

class Game extends Component {
  state = {
    score: 0,
    topScore: 0,
    guessMessage: "Click an image to begin!",
    guessClass: ""
  };

  imageArray = [
    {
      id: 0,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jtgjWqE2C8KkL_XmL3g4J-RQis2J663VbYf3QMXAaQUEAT1K0w"
    },
    {
      id: 1,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyXfHN3Lq4jGsIt9khpNd9FgNNMEjY60L9ClqZPTxamYuMhxQ"
    },
    {
      id: 2,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPXbAolyNzhK1XuihCghOJ7ZpHbxWCTt-m_OWAACgPr6bbmErUQ"
    },
    {
      id: 3,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvMmEQMKuvxOIzlVGdz6vSwgnXAr_s42GfoQMkjz1WgHodAoxqzg"
    },
    {
      id: 4,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN7hpGOsLgQk3OfkqlCuJqNskGeyU2_7q7rt0BhgbxmLVaorDC"
    },
    {
      id: 5,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbhnpuwHp-_miO7Hbu_gxOPcuZDZrEpbVncOZu324frHhVECK"
    },
    {
      id: 6,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4jUc--2gZRPb_08St1FrfkkIDTsPw4Irr0DmLQzjj7FkQgD6jg"
    },
    {
      id: 7,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKue0RaL3kdQgZgEdf9zZ22iFT83kpijiegJ1xFJfGxfeRAyXZsA"
    },
    {
      id: 8,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqvhPjaPHOC00j8c42xv5zFKySPpTyQCiQdSUbZ1aFrIZXJoO"
    },
    {
      id: 9,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG413kdOpTHcr4RLQ0OpFjrOBpAwBKD-r9DzYfQDnonmXjiNd_dg"
    },
    {
      id: 10,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4rCJw810w5dh1QqjrrH5QcbjRFgmBgDCrnt2x4MMf8XSu6dbXg"
    },
    {
      id: 11,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRva1kxC4AU9gaQVqYh6uVUPsq-ML1kLSJCIBiCJTQQ7GdqOQm5kw"
    }
  ];
  game = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  handleClick = id => {
    if (this.game.includes(id)) {
      this.setState({
        score: this.state.score + 1,
        guessMessage: "You guessed Correctly!",
        guessClass: "green"
      });
      for (let i = 0; i < this.game.length; i++) {
        if (id === this.game[i]) {
          this.game.splice(i, 1);
        }
      }
      this.shuffle(this.imageArray);
    } else {
      if (this.state.topScore < this.state.score) {
        this.setState({
          topScore: this.state.score,
          score: 0,
          guessMessage: "You guessed Incorrectly!",
          guessClass: "red"
        });
        this.shuffle(this.imageArray);
      } else {
        this.setState({
          score: 0,
          guessMessage: "You guessed Incorrectly!",
          guessClass: "red"
        });
        this.shuffle(this.imageArray);
      }
      this.game = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    }
  };

  shuffle = array => {
    array.sort(() => Math.random() - 0.5);
  };

  render() {
    return (
      <div className="container-fluid p-0">
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          guessMessage={this.state.guessMessage}
          guessClass={this.state.guessClass}
        />
        <Header />
        <Area
          images={this.imageArray}
          handleClick={this.handleClick}
          guessClass={this.state.guessClass}
        />
        <Footer />
      </div>
    );
  }
}

export default Game;
